var file = process.argv.slice(2);
const day = file[0].replace(".5", "")

let pathToFile = `./${day}/${file}.js`
require(pathToFile)