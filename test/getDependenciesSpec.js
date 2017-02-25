"use strict"

let getDependencies = require('./../src/getDependencies'),
  chai = require('chai'),
  expect = chai.expect

describe('getDependencies', () => {
  let dependencies = ['chai']

  describe('with available dependencies', () => {
    it('returns all required dependencies for module', () => {
      expect(getDependencies(dependencies)).to.deep.equal(['assertion-error', 'deep-eql', 'type-detect'])
    })
  })

  describe('without any dependencies', () => {
    it('returns empty array', () => {
      expect(getDependencies(['puppies'])).to.deep.equal([])
    })
  })
})
