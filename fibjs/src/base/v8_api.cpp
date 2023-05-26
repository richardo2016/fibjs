/*
 * traceInfo.cpp
 *
 *  Created on: Oct 1, 2017
 *      Author: lion
 */

#ifdef _WIN32
#pragma warning(disable : 4800)
#pragma warning(disable : 4101)
#pragma warning(disable : 4244)
#define _WIN32_WINNT 0x0602
#endif

#include "v8/src/codegen/bailout-reason.h"
#include "v8/src/objects/compressed-slots.h"
#include "v8/src/objects/function-kind.h"
#include "v8/src/objects/function-syntax-kind.h"
#include "v8/src/objects/objects.h"
#include "v8/src/objects/script.h"
#include "v8/src/objects/slots.h"
#include "v8/src/objects/smi.h"
#include "v8/src/objects/struct.h"
#include "v8/src/objects/object-macros.h"

#define private public
#include "v8/src/objects/shared-function-info.h"
#include "v8/src/objects/backing-store.h"
#undef private

#include "v8/src/api/api-inl.h"
#include "v8/src/utils/utils.h"
#include "v8/src/api/api.h"
#include "v8/src/execution/isolate.h"
#include "v8/src/execution/frames.h"
#include "v8/src/execution/frames-inl.h"
#include "v8/src/debug/debug-interface.h"
#include "v8/src/execution/microtask-queue.h"

#include "exlib/include/qstring.h"

#include "v8.h"
#include "v8_api.h"

#include "v8/src/objects/backing-store.cc"

using namespace v8;

namespace fibjs {

intptr_t RunMicrotaskSize(Isolate* isolate)
{
    i::Isolate* _isolate = reinterpret_cast<i::Isolate*>(isolate);
    return _isolate->default_microtask_queue()->size();
}

bool isFrozen(Local<Object> object)
{
    auto obj = Utils::OpenHandle(*object);
    Maybe<bool> test = i::JSReceiver::TestIntegrityLevel(obj, i::FROZEN);
    return test.FromMaybe(false);
}

void setAsyncFunctoin(Local<Function> func)
{
    i::Handle<i::Object> obj = Utils::OpenHandle(*func);
    i::Handle<i::JSFunction> _func = i::Handle<i::JSFunction>::cast(obj);
    _func->shared().set_kind(i::FunctionKind::kAsyncFunction);
}

uint16_t get_instance_type(Local<Object> o)
{
    i::Address obj = *reinterpret_cast<i::Address*>(*o);
    return i::Internals::GetInstanceType(obj);
}

void set_instance_type(Local<Object> o, uint16_t type)
{
    i::Address obj = *reinterpret_cast<i::Address*>(*o);
    i::Address map = i::Internals::ReadTaggedPointerField(obj, i::Internals::kHeapObjectMapOffset);
#ifdef V8_MAP_PACKING
    map = UnpackMapWord(map);
#endif
    i::Address addr = map + i::Internals::kMapInstanceTypeOffset - i::kHeapObjectTag;
    *reinterpret_cast<uint16_t*>(addr) = type;
}

static void s_store_deleter(void* data, size_t length, void* deleter_data)
{
}

void* fetch_store_data(std::shared_ptr<v8::BackingStore>& backing_store)
{
    auto store = reinterpret_cast<const i::BackingStore*>(backing_store.get());
    if (s_store_deleter == store->type_specific_data_.deleter.callback)
        return store->type_specific_data_.deleter.data;
    return NULL;
}

std::unique_ptr<v8::BackingStore> NewBackingStore(size_t byte_length, void* deleter_data)
{
    CHECK_LE(byte_length, i::JSArrayBuffer::kMaxByteLength);

    uint8_t* data = new uint8_t[byte_length + sizeof(i::BackingStore)];
    auto result = new ((i::BackingStore*)data) i::BackingStore(data + sizeof(i::BackingStore), byte_length, byte_length, byte_length,
        i::SharedFlag::kNotShared, i::ResizableFlag::kNotResizable, false, true, false, true, false);
    result->type_specific_data_.deleter = { s_store_deleter, deleter_data };

    return std::unique_ptr<v8::BackingStore>((v8::BackingStore*)result);
}

void* get_instance_pointer(Local<Object> o, uint16_t buffer_type)
{
    const int32_t kObjectType = 0x600;
    const int32_t kLastObjectType = 0x700;

    i::Address obj = *reinterpret_cast<i::Address*>(*o);
    auto instance_type = i::Internals::GetInstanceType(obj);

    if (instance_type == i::Internals::kJSSpecialApiObjectType
        || (instance_type >= kObjectType && instance_type < kLastObjectType)) {
        int offset = i::Internals::kJSObjectHeaderSize + i::Internals::kEmbedderDataSlotExternalPointerOffset;
        Isolate* isolate = i::Internals::GetIsolateForSandbox(obj);
        i::Address value = i::Internals::ReadExternalPointerField<internal::kEmbedderDataSlotPayloadTag>(
            isolate, obj, offset);
        return reinterpret_cast<void*>(value);
    }

    if (instance_type == i::Internals::kLastJSApiObjectType + i::kExternalUint8Array) {
        v8::Local<v8::Object> proto = o->GetPrototype().As<v8::Object>();
        obj = *reinterpret_cast<i::Address*>(*proto);
        instance_type = i::Internals::GetInstanceType(obj);

        if (instance_type != buffer_type)
            return NULL;

        v8::Local<v8::ArrayBufferView> arr = o.As<v8::ArrayBufferView>();
        std::shared_ptr<v8::BackingStore> store = arr->Buffer()->GetBackingStore();
        return fetch_store_data(store);
    }

    return NULL;
}

bool path_isAbsolute(exlib::string path);

void InvokeApiInterruptCallbacks(Isolate* isolate)
{
    i::Isolate* v8_isolate = (i::Isolate*)isolate;
    v8_isolate->InvokeApiInterruptCallbacks();
}

V8FrameInfo save_fi(Isolate* isolate)
{
    i::Isolate* v8_isolate = (i::Isolate*)isolate;
    V8FrameInfo fi;

    fi.entry_fp = (void*)*v8_isolate->c_entry_fp_address();
    fi.handle = (void*)*v8_isolate->handler_address();

    return fi;
}

exlib::string traceInfo(Isolate* isolate, int32_t deep, void* entry_fp, void* handle)
{
    i::Isolate* v8_isolate = (i::Isolate*)isolate;
    i::ThreadLocalTop tt;

    tt.c_entry_fp_ = (i::Address)entry_fp;
    tt.handler_ = (i::Address)handle;

    i::JavaScriptFrameIterator it(v8_isolate, &tt);

    exlib::string strBuffer;
    bool bFirst = true;

    for (; !it.done() && deep-- > 0; it.Advance()) {
        i::JavaScriptFrame* frame = it.frame();
        std::vector<i::FrameSummary> frames;

        frame->Summarize(&frames);

        const i::FrameSummary::JavaScriptFrameSummary& summ = frames[0].AsJavaScript();
        i::Handle<i::Script> script = i::Handle<i::Script>::cast(summ.script());
        if (script->type() == i::Script::TYPE_NORMAL) {
            strBuffer.append(bFirst ? "    at " : "\n    at ");
            bFirst = false;

            String::Utf8Value funcname(isolate, Utils::ToLocal(i::JSFunction::GetName(v8_isolate, summ.function())));
            if (*funcname) {
                strBuffer.append(*funcname);
                strBuffer.append(" (", 2);
            }

            int32_t line_number = 0;
            int32_t column_number = 0;
            i::Script::PositionInfo info;
            bool valid_pos = i::Script::GetPositionInfo(script, summ.SourcePosition(),
                &info, i::Script::WITH_OFFSET);

            if (valid_pos) {
                line_number = info.line + 1;
                column_number = info.column + 1;
            }

            i::Handle<i::Object> name(script->name(), v8_isolate);
            String::Utf8Value filename(isolate, Utils::ToLocal(name));

            char numStr[32];

            if (*filename) {
                strBuffer.append(*filename);
                strBuffer.append(1, ':');
            } else
                strBuffer.append("[eval]:", 7);

            snprintf(numStr, sizeof(numStr), "%d", line_number);
            strBuffer.append(numStr);
            strBuffer.append(1, ':');
            snprintf(numStr, sizeof(numStr), "%d", column_number);
            strBuffer.append(numStr);

            if (**funcname)
                strBuffer.append(1, ')');
        }
    }
    return strBuffer;
}

exlib::string traceInfo(Isolate* isolate, int32_t deep)
{
    i::Isolate* v8_isolate = (i::Isolate*)isolate;
    return traceInfo(isolate, deep, (void*)*v8_isolate->c_entry_fp_address(), (void*)*v8_isolate->handler_address());
}

void beginCoverage(Isolate* isolate)
{
    debug::Coverage::SelectMode(isolate, debug::CoverageMode::kBlockCount);
}

void pauseCoverage(Isolate* isolate)
{
    debug::Coverage::SelectMode(isolate, debug::CoverageMode::kBestEffort);
}

inline std::string ToSTLString(Isolate* isolate, Local<String> v8_str)
{
    String::Utf8Value utf8(isolate, v8_str);
    return *utf8;
}

inline int LineFromOffset(Local<debug::Script> script, int offset)
{
    debug::Location location = script->GetSourceLocation(offset);
    return location.GetLineNumber();
}

inline void WriteLcovDataForRange(std::vector<uint32_t>& lines, int start_line,
    int end_line, uint32_t count)
{
    // Ensure space in the array.
    lines.resize(std::max(static_cast<size_t>(end_line + 1), lines.size()), 0);
    // Boundary lines could be shared between two functions with different
    // invocation counts. Take the maximum.
    lines[start_line] = std::max(lines[start_line], count);
    lines[end_line] = std::max(lines[end_line], count);
    // Invocation counts for non-boundary lines are overwritten.
    for (int k = start_line + 1; k < end_line; k++)
        lines[k] = count;
}

inline void WriteLcovDataForNamedRange(FILE* sink,
    std::vector<uint32_t>& lines, std::string name, int start_line, int end_line, uint32_t count)
{
    WriteLcovDataForRange(lines, start_line, end_line, count);
    fprintf(sink, "FN:%d,%s\n", start_line + 1, name.c_str());
    fprintf(sink, "FNDA:%d,%s\n", count, name.c_str());
}

void WriteLcovData(Isolate* isolate, FILE* file)
{
    HandleScope handle_scope(isolate);
    debug::Coverage coverage = debug::Coverage::CollectPrecise(isolate);

    for (size_t i = 0; i < coverage.ScriptCount(); i++) {
        debug::Coverage::ScriptData script_data = coverage.GetScriptData(i);
        Local<debug::Script> script = script_data.GetScript();
        // Skip unnamed scripts.
        Local<String> name;
        if (!script->Name().ToLocal(&name))
            continue;
        std::string file_name = ToSTLString(isolate, name);
        if (!path_isAbsolute(file_name))
            continue;

        fprintf(file, "SF:%s\n", file_name.c_str());
        std::vector<uint32_t> lines;
        for (size_t j = 0; j < script_data.FunctionCount(); j++) {
            debug::Coverage::FunctionData function_data = script_data.GetFunctionData(j);

            // Write function stats.
            {
                debug::Location start = script->GetSourceLocation(function_data.StartOffset());
                debug::Location end = script->GetSourceLocation(function_data.EndOffset());
                int start_line = start.GetLineNumber();
                int end_line = end.GetLineNumber();
                uint32_t count = function_data.Count();

                Local<String> name;
                std::stringstream name_stream;
                if (function_data.Name().ToLocal(&name)) {
                    name_stream << ToSTLString(isolate, name);
                } else {
                    name_stream << "<" << start_line + 1 << "-";
                    name_stream << start.GetColumnNumber() << ">";
                }

                WriteLcovDataForNamedRange(file, lines, name_stream.str(), start_line,
                    end_line, count);
            }

            // Process inner blocks.
            for (size_t k = 0; k < function_data.BlockCount(); k++) {
                debug::Coverage::BlockData block_data = function_data.GetBlockData(k);
                int start_line = LineFromOffset(script, block_data.StartOffset());
                int end_line = LineFromOffset(script, block_data.EndOffset() - 1);
                uint32_t count = block_data.Count();
                WriteLcovDataForRange(lines, start_line, end_line, count);
            }
        }
        // Write per-line coverage. LCOV uses 1-based line numbers.
        for (size_t i = 0; i < lines.size(); i++)
            fprintf(file, "DA:%d,%d\n", (int32_t)(i + 1), lines[i]);

        fprintf(file, "end_of_record\n");
    }

    fclose(file);
}
}