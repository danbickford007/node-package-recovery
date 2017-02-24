let fs = require('fs'),
    _ = require('lodash')

const fullDeps = (dirs) => {
  return dirs.map((dir, index) => {
    if (dir.indexOf('.') !== 0) {
      let packageJsonFile = './node_modules/' + dir + '/package.json'
      if (fs.existsSync(packageJsonFile)) {
        return JSON.parse(fs.readFileSync(packageJsonFile))
      }
    }
  })
}

const getDependencies = (dirs) => {
  let json = fullDeps(dirs).map((item, index) => {
    if (item) {
      return Object.keys(item.dependencies)
    }
  })
  return [].concat.apply([], json)
}

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

const packager = () => {
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
