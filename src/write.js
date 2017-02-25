const fs = require('fs')
const packager = require('./packager')

class Write {

  constructor (modifier = '.npr') {
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

  continueWrite (path, content) {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return console.log(err)
      }
      console.log(`${path} was saved!`)
      process.exit()
    })
  }

  write (data) {
    let content = this.organizeFile(data)
    let path = `package${this.modifier}.json`
    if (fs.existsSync(path)) {
      console.log('File already exists, overwrite it? Type Y to continue')
      process.stdin.on('data', (input) => {
        if (input.toString() === 'Y\n') {
          this.continueWrite(path, content)
        } else {
          console.log('Exiting...')
          process.exit()
        }
      })
    } else {
      this.continueWrite(path, content)
    }
  }
}

module.exports = Write
