
//CommonJS, every file is a module (by default)
//Modules - encapulated code (only share minimum)

const names = require('./4-names.js')
const sayHi  = require('./5-utils.js')
const data = require('./6-alternative-export')

//module is still invoked even though not assigned to a variable
require('./7-mind-grenade.js')

console.log(names)
console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)