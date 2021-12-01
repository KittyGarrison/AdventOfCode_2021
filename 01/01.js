const fs = require("fs");

let depthReport = {
    increases: 0,
    decreases: 0,
    addIncrease: function() {
        this.increases++;
        console.log("increase");
    },
    addDecrease: function() {
        this.decreases++;
        console.log("decrease");
    },
    print: function() {
        console.log(
            `Current Count\nincreases: ${this.increases}\ndecreases: ${this.decreases}`
        );
    },
};

fs.readFile("./01/01_input.txt", (err, data) => {
    if (err) throw err;
    let dataArray = dataToNumArray(data);
    evaluate(dataArray);
    depthReport.print();
});

function dataToNumArray(data) {
    let stringArray = data.toString().split(",\n");
    let numArray = stringArray.map(Number);
    return numArray;
}

function evaluate(array) {
    let a = array[0];
    let i = 1;
    do {
        if (a > array[i]) {
            depthReport.addDecrease();
        } else if (a < array[i]) {
            depthReport.addIncrease();
        }
        a = array[i];
        i++;
    } while (i < array.length);
}