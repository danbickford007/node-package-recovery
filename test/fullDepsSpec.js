"use strict"

let fullDeps = require('./../src/fullDeps'),
  chai = require('chai'),
  expect = chai.expect

describe('fullDeps', () => {
  let dependencies = ['chai']

  describe('with dependencies', () => {
    it('returns full package.json object', () => {
      let deps = fullDeps(dependencies)[0]
      expect(Object.keys(deps).length).to.equal(38)
    })
  })

  describe('without dependencies', () => {
    it('empty array', () => {
      expect(fullDeps(['foobar'])).to.deep.equal([])
    })
  })
})
