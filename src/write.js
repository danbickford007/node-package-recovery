const fs = require('fs')
const packager = require('./packager')

class Write {

  constructor () {
    this.data = ''
  }

  start () {
    packager().then((data) => {
      this.write(data)
    })
  }

  organizeFile (data) {
    return `{
  "name": "",
  "dependencies":{
${data}  }
}`
  }

  write (data) {
    let content = this.organizeFile(data)
    fs.writeFile('package.smp.json', content, (err) => {
      if (err) {
        return console.log(err)
      }

      console.log('package.smp.json was saved!')
    })
  }
}

module.exports = Write
