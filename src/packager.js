"use strict"

const fs = require('fs')
const generateDependencies = require('./generateDependencies')
const getDependencies = require('./getDependencies')
const getPackages = require('./getPackages')

const packager = () => {
  return new Promise((resolve, reject) => {
    fs.readdir('./node_modules', (err, dirs) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      let packages = getPackages(getDependencies(dirs), dirs)
      generateDependencies(packages).then((data) => {
        resolve(data)
      })
    })
  })
}

module.exports = packager
