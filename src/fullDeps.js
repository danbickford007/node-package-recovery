"use strict"
const fs = require('fs')
const _ = require('lodash')

const fullDeps = (dirs) => {
  return _.without(dirs.map((dir, index) => {
    if (dir.indexOf('.') !== 0) {
      let packageJsonFile = './node_modules/' + dir + '/package.json'
      if (fs.existsSync(packageJsonFile)) {
        return JSON.parse(fs.readFileSync(packageJsonFile))
      }
    }
  }), undefined)
}

module.exports = fullDeps
