var test = require('test')
test.setup()

describe('Stream', () => {
  const Stream = require('stream')

  it('Reabable', () => {
    assert.equal(Stream.Readable, require('_stream_readable'))
  })

  it('Writable', () => {
    assert.equal(Stream.Writable, require('_stream_writable'))
  })

  it('Duplex', () => {
    assert.equal(Stream.Duplex, require('_stream_duplex'))
  })

  it('Transform', () => {
    assert.equal(Stream.Transform, require('_stream_transform'))
  })

  it('PassThrough', () => {
    assert.equal(Stream.PassThrough, require('_stream_passthrough'))
  })
})

require.main === module && test.run(console.DEBUG)
