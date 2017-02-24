let lister = require('./../src/lister'),
  chai = require('chai'),
  sinonChai = require('sinon-chai'),
  sinon = require('sinon')

chai.use(sinonChai)

describe('lister', () => {
  describe('listing availble modules', () => {
    it('calls console.log', () => {
      let log = sinon.spy(console, 'log')
      lister()
      sinon.assert.calledOnce(log)
    })
  })
})
