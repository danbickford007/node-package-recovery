"use strict"

let lister = require('./../src/lister'),
  chai = require('chai'),
  sinon = require('sinon')

describe('lister', () => {
  describe('listing available modules', () => {
    it('calls console.log', () => {
      let log = sinon.spy(console, 'log')
      lister()
      sinon.assert.calledOnce(log)
    })
  })
})
