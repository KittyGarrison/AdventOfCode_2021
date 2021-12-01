var myArgs = process.argv.slice(2);
const day = myArgs[0]
let file = `./${day}/${day}.js`
require(file)