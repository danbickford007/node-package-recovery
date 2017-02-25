const fs = require('fs')
const packager = require('./packager')
const _ = require('lodash')

class Edit {

  constructor () {
    this.data = ''
  }

  start () {
    packager().then((data) => {
      this.edit(data)
    })
  }

  edit (data) {
    const packJson = fs.readFileSync('package.json')
    const pack = JSON.parse(packJson.toString())
    const deps = pack.dependencies
    const attempt = `{${data}}`
    const merged = _.merge(JSON.parse(attempt), deps)
    pack.dependencies = merged
    fs.writeFile(`package.json`, JSON.stringify(pack, null, 2), (err) => {
      if (err) {
        return console.log(err)
      }

      console.log(`package.json dependencies was edited!`)
    })
  }
}

module.exports = Edit
