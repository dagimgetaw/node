// __dirname => display current working directory
// __filename => display file name
// require => function to use module
// module => info about current module
// process => info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

const name = require("./01_names");
const sayHi = require("./01_function");

sayHi("susan");
sayHi(name.john);
sayHi(name.peter);
