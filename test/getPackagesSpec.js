"use strict"

let getPackages = require('./../src/getPackages'),
  chai = require('chai'),
  expect = chai.expect

describe('getPackages', () => {

  let dependencies = ['abc']
  let dirs = ['xyz']

  describe('with other dependencies', () => {
    it('returns data', () => {
      expect(getPackages(dependencies, dirs)).to.deep.equal(['xyz'])
    })
  })

  describe('with same dependencies as module', () => {
    it('does not include module', () => {
      dirs = ['abc']
      expect(getPackages(dependencies, dirs)).to.deep.equal([])
    })
  })
})
