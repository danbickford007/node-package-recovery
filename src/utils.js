"use strict"

const fs = require('fs')

class Utils {
  versionCheck () {
    return `${this.name()}: ${this.version()}`
  }

  name () {
    return JSON.parse(fs.readFileSync(this.pack())).name
  }

  version () {
    return JSON.parse(fs.readFileSync(this.pack())).version
  }

  pack () {
    return __dirname.replace('/dist', '') + '/package.json'
  }
}

module.exports = new Utils()
