"use strict"
const fs = require('fs')
const fullDeps = require('./fullDeps')

const generateDependencies = (packages) => {
  return new Promise((resolve, reject) => {
    let json = fullDeps(packages)
    const finalData = Object.keys(json).map((key, index) => {
      let comma = index < Object.keys(json).length - 1 ? '",\n' : '"\n'
      return `    "${json[key].name}": "${json[key].version}${comma}`
    }).join('')
    resolve(finalData)
  })
}

module.exports = generateDependencies
