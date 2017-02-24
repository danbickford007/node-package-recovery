const packager = require('./packager')

module.exports = () => {
	console.log('Available modules: \n')
  packager().then((data) => {
    console.log(data)
  })
}
