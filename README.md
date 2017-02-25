## npr

![travisci](https://travis-ci.org/danbickford007/node-package-recovery.svg?branch=master)

[![npm package](https://nodei.co/npm/node-package-recovery.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/node-package-recovery)

[GITHUB](https://github.com/danbickford007/node-package-recovery)

Did you `npm install someModule` without the `--save` or didn't commit your new app to git 
and accidently removed the `package.json` file? This tool is used to generate a `package.json` 
file from your `node_modules` directory in such scenario.

#### Install:

###### NPM

** Make sure you install with `-g` flag 

`npm install node-package-recovery -g`

###### From source

`git clone git@github.com:danbickford007/node_module_recovery.git`

`cd node_module_recovery`

`npm install`

`grunt`

#### Usage :

###### list all modules and versions

`npr list`

`npr -l`

`npr --list`

###### create a `package.npr.json` file

`npr write`

`npr -w`

###### edit your package.json dependencies

`npr edit`

`npr -e`

###### create a new package.json file

`npr new`

`npr -n`

##### Dev

Install: `grunt`

###### Test

Run tests within `tests/` directory

`./../node_modules/mocha/bin/mocha .`
