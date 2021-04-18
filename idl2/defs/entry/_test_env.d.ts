



/// <reference path="../module/test.d.ts" />
import test = require('test')

/// <reference path="../class/assert.d.ts" />
import _assert = require('assert')

declare global {
	const describe: typeof test.describe
	const xdescribe: typeof test.xdescribe
	const odescribe: typeof test.odescribe
	const it: typeof test.it
	const xit: typeof test.xit
	const oit: typeof test.oit
	const before: typeof test.before
	const after: typeof test.after
	const beforeEach: typeof test.beforeEach
	const afterEach: typeof test.afterEach
	const setup: typeof test.setup

	const assert: typeof _assert
}
/** declare const describe: test.describe; */

