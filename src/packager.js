"use strict"

const fs = require('fs')
const generateDependencies = require('./generateDependencies')
const getDependencies = require('./getDependencies')
const getPackages = require('./getPackages')

const packager = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync('./node_modules')) return reject('Could not find ./node_modules')
    fs.readdir('./node_modules', (err, dirs) => {
      if (dirs.length < 1) return reject('No modules found in ./node_modules')
      if (err) return reject(err)
      let packages = getPackages(getDependencies(dirs), dirs)
      generateDependencies(packages).then((data) => {
        resolve(data)
      })
    })
  })
}

module.exports = packager
