## nmp

Did you `npm install someModule` without the `--save` or didn't commit your new app to git 
and accidently removed the `package.json` file? This tool is used to generate a `package.json` 
file from your `node_modules` directory in such scenario.

#### Install:

`git clone git@github.com:danbickford007/node_module_recovery.git`

`cd node_module_recovery && grunt package`

#### Usage :

###### list all modules and versions

`nmp list`

###### create a `package.nmp.json` file

`nmp write`

##### Dev

Install: `grunt package`

###### Test

`./node_modules/mocha/bin/mocha test/ --use_strict`
