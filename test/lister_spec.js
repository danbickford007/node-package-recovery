let expect = require('chai').expect,
  lister = require('./../src/lister'),
  sinon = require('sinon')

describe('lister', () => {
  describe('listing availble modules', () => {
    before(() => {
      sinon.spy(console, 'log')
    })
    it('calls console.log', () => {
      lister()
    })
  })
})
