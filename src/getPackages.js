"use strict"

const _ = require('lodash')

const sort = (deps) => {
  return deps.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}

const getPackages = (dependencies, dirs) => {
  const deps = dirs.map((item) => {
    if (item) {
      if (dependencies.indexOf(item) < 0) {
        return item
      }
    }
  })
  return _.without(sort(deps), undefined)
}

module.exports = getPackages
