"use strict"

const fs = require('fs')

class Utils {
  versionCheck () {
    return `${this.name()}: ${this.version()}`
  }

  name () {
    return JSON.parse(fs.readFileSync('package.json')).name
  }

  version () {
    return JSON.parse(fs.readFileSync('package.json')).version
  }
}

module.exports = new Utils()
