"use strict"

const fullDeps = require('./fullDeps')

const getDependencies = (dirs) => {
  let json = fullDeps(dirs).map((item, index) => {
    if (item) {
      return Object.keys(item.dependencies)
    }
  })
  return [].concat.apply([], json)
}

module.exports = getDependencies
