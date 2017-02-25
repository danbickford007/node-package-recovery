"use strict"

const fullDeps = require('./fullDeps')
const _ = require('lodash')

const getDependencies = (dirs) => {
  let json = fullDeps(dirs).map((item, index) => {
    if (item) {
      return Object.keys(item.dependencies)
    }
  })
  return _.without([].concat.apply([], json), undefined)
}

module.exports = getDependencies
