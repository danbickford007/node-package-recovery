let packager = require('./../src/packager'),
  chai = require('chai'),
  expect = chai.expect,
  sinonChai = require('sinon-chai'),
  sinon = require('sinon')

chai.use(sinonChai)

describe('packager', () => {
  describe('listing availble modules', () => {
    it('returns data', () => {
      packager().then((data) => {
        console.log('???????????')
        console.log(data)
        expect(data).to.be.true
      })
    })
  })
})
