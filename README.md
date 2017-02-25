## npr

![travisci](https://travis-ci.org/danbickford007/node-package-recovery.svg?branch=master)

Did you `npm install someModule` without the `--save` or didn't commit your new app to git 
and accidently removed the `package.json` file? This tool is used to generate a `package.json` 
file from your `node_modules` directory in such scenario.

#### Install:

`git clone git@github.com:danbickford007/node_module_recovery.git`

`cd node_module_recovery`

`npm install`

`grunt package`

#### Usage :

###### list all modules and versions

`npr list`

###### create a `package.npr.json` file

`npr write`

###### edit your package.json dependencies

`npr edit`

##### Dev

Install: `grunt package`

###### Test

Run tests within `tests/` directory

`./../node_modules/mocha/bin/mocha .`
