let fs = require('fs')

module.exports = () => {
  fs.readdir('./node_modules', (err, dirs) => {
    if (err) {
      console.log(err)
      return
    }
    dirs.forEach((dir) => {
      if (dir.indexOf('.') !== 0) {
        let packageJsonFile = './node_modules/' + dir + '/package.json'
        if (fs.existsSync(packageJsonFile)) {
          fs.readFile(packageJsonFile, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              let json = JSON.parse(data)
              console.log(`${json.name}: ${json.version}`)
            }
          })
        }
      }
    })
  })
}
