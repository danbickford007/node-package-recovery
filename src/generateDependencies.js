"use strict"
const fs = require('fs')

const generateDependencies = (packages) => {
  return new Promise((resolve, reject) => {
    let finalData = ''
    packages.forEach((dir, index) => {
      if (dir.indexOf('.') !== 0) {
        let packageJsonFile = './node_modules/' + dir + '/package.json'
        if (fs.existsSync(packageJsonFile)) {
          let json = JSON.parse(fs.readFileSync(packageJsonFile))
          let comma = index < packages.length - 1 ? '",\n' : '"\n'
          finalData = finalData + `    "${json.name}": "${json.version}${comma}`
        }
      }
    })
    resolve(finalData)
  })
}

module.exports = generateDependencies
