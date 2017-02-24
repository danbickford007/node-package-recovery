let fs = require('fs')

module.exports = () => {
  let finalData = ''
  return new Promise((resolve, reject) => {
    fs.readdir('./node_modules', (err, dirs) => {
      if (err) {
        console.log(err)
        return
      }
      dirs.forEach((dir, index) => {
        if (dir.indexOf('.') !== 0) {
          let packageJsonFile = './node_modules/' + dir + '/package.json'
          if (fs.existsSync(packageJsonFile)) {
            let data = fs.readFileSync(packageJsonFile)
            if (err) {
              console.log(err)
            } else {
              let json = JSON.parse(data)
              let comma = index < dirs.length - 1 ? '", \n' : '"\n'
              finalData = finalData + `    "${json.name}": "${json.version}${comma}`
            }
          }
        }
      })
      resolve(finalData)
    })
  })
}
