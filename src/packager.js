let fs = require('fs'),
    _ = require('lodash')

const getDependencies = (dirs) => {
  const deps = dirs.map((dir, index) => {
    if (dir.indexOf('.') !== 0) {
      let packageJsonFile = './node_modules/' + dir + '/package.json'
      if (fs.existsSync(packageJsonFile)) {
        let data = fs.readFileSync(packageJsonFile)
        let json = JSON.parse(data)
        return Object.keys(json.dependencies)
      }
    }
  })
  return [].concat.apply([], deps)
}

const getPackages = (dependencies, dirs) => {
  const deps = dirs.map((dir, index) => {
    if (dir.indexOf('.') !== 0) {
      let packageJsonFile = './node_modules/' + dir + '/package.json'
      if (fs.existsSync(packageJsonFile)) {
        let data = fs.readFileSync(packageJsonFile)
        let json = JSON.parse(data)
        if (dependencies.indexOf(json.name) < 0) {
          return json.name
        }
      }
    }
  })
  return _.without(deps, undefined)
}

const packager  = () => {
  let finalData = ''
  return new Promise((resolve, reject) => {
    fs.readdir('./node_modules', (err, dirs) => {
      if (err) {
        console.log(err)
        return
      }
      const packages = getPackages(getDependencies(dirs), dirs)
      packages.forEach((dir, index) => {
        if (dir.indexOf('.') !== 0) {
          let packageJsonFile = './node_modules/' + dir + '/package.json'
          if (fs.existsSync(packageJsonFile)) {
            let data = fs.readFileSync(packageJsonFile)
            if (err) {
              console.log(err)
            } else {
              let json = JSON.parse(data)
              let comma = index < packages.length - 1 ? '", \n' : '"\n'
              finalData = finalData + `    "${json.name}": "${json.version}${comma}`
            }
          }
        }
      })
      resolve(finalData)
    })
  })
}

module.exports = packager
