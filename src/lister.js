const packager = require('./packager')

module.exports = () => {
  console.log('Available modules: \n')
  packager().then((data) => {
    console.log(data)
  }, (err) => {
    console.log('An error has occured:')
    console.log(err)
  })
}
