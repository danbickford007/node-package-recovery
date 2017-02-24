"use strict"
const fs = require('fs')

const fullDeps = (dirs) => {
  return dirs.map((dir, index) => {
    if (dir.indexOf('.') !== 0) {
      let packageJsonFile = './node_modules/' + dir + '/package.json'
      if (fs.existsSync(packageJsonFile)) {
        return JSON.parse(fs.readFileSync(packageJsonFile))
      }
    }
  })
}

module.exports = fullDeps
