console.log("Running file []");
const fs = require("fs");



fs.readFile("./02/02_input.txt", (err, data) => {
    if (err) throw err;
    let dataArray = dataToArray(data);
    evaluate(dataArray);
    // finalAnswer.print();
});

function dataToArray(data) {
    return data.toString().split("\n");;
}

function evaluate(array) {
    array.forEach((item) => {
      // do a thing  
    })
}