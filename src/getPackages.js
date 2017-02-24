"use strict"
const _ = require('lodash')

const getPackages = (dependencies, dirs) => {
  const deps = dirs.map((item) => {
    if (item) {
      if (dependencies.indexOf(item) < 0) {
        return item
      }
    }
  })
  return _.without(deps, undefined)
}

module.exports = getPackages
