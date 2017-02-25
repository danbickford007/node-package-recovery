"use strict"
const fs = require('fs')

let Write = require('./../src/Write'),
  chai = require('chai'),
  expect = chai.expect

describe('Write', () => {
  let data = "test: 1.2.3"
  let payload =  `{
  "name": "${process.cwd().split('/').pop()}",
  "version": "0.0.1",
  "dependencies":{
${data}  }
}`

  before(() => {
    let write = new Write()
    write.write(data)
  })

  after(() => {
    fs.unlink('package.npr.json')
  })

  describe('with dependencies', () => {
    it('writes the correct file', () => {
      let result = fs.readFileSync('package.npr.json')
      expect(result.toString()).to.equal(payload)
    })
  })
})
