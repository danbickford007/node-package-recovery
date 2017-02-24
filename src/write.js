let fs = require('fs')

class Write {

  constructor () {
    this.data = ''
  }

  start () {
    new Promise((resolve, reject) => {
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
                let comma = index < dirs.length - 1 ? ', \n' : '\n'
                this.data = this.data + `    "${json.name}": ${json.version}${comma}`
              }
            }
          }
        })
        resolve()
      })
    }).then(() => {
      this.write()
    })
  }

  organizeFile (data) {
    return `{
  "name": "",
  "dependencies":{
${data}  }
}`
  }

  write () {
    let content = this.organizeFile(this.data)
    fs.writeFile('package.smp.json', content, (err) => {
      if (err) {
        return console.log(err)
      }

      console.log('package.smp.json was saved!')
    })
  }
}

module.exports = Write
