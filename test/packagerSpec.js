"use strict"

let packager = require('./../src/packager'),
  chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon')

describe('packager', () => {
  describe('listing availble modules', () => {
    it('returns data', () => {
      return packager().then((data) => {
        expect(data).to.be.ok
      })
    })

    it('has correct modules', () => {
      return packager().then((data) => {
        expect(data).to.equal('    "chai": "3.5.0"\n')
      })
    })
  })
})
