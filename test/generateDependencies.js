"use strict"

let generateDependencies = require('./../src/generateDependencies'),
  chai = require('chai'),
  expect = chai.expect

describe('generateDependencies', () => {
  let dependencies = ['chai']

  describe('with dependencies', () => {
    it('returns package.json formatted dependency', () => {
      return generateDependencies(dependencies).then((data) => {
        expect(data).to.equal('    "chai": "3.5.0"\n')
      })
    })
  })
})
