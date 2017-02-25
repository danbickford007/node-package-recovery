const fs = require('fs')
const packager = require('./packager')

class Write {

  constructor (modifier = '.smp') {
    this.modifier = modifier
    this.data = ''
  }

  start () {
    packager().then((data) => {
      this.write(data)
    })
  }

  organizeFile (data) {
    return `{
  "name": "${process.cwd().split('/').pop()}",
  "version": "0.0.1",
  "dependencies":{
${data}  }
}`
  }

  write (data) {
    let content = this.organizeFile(data)
    fs.writeFile(`package${this.modifier}.json`, content, (err) => {
      if (err) {
        return console.log(err)
      }

      console.log(`package${this.modifier}.json was saved!`)
    })
  }
}

module.exports = Write
