const packager = require('./packager')

module.exports = () => {
  packager().then((data) => {
    console.log(data)
  })
}
