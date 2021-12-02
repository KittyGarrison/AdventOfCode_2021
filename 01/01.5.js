console.log("this is file 01.5");

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
    let i = 1;
    let previousSum = array[0] + array[1] + array[2];
    // console.log(previousSum);
    do {
        let a = array[i];
        let b = array[i + 1];
        let c = array[i + 2];
        let currentSum = a + b + c
            // console.log(currentSum);
        if (previousSum > currentSum) {
            depthReport.addDecrease();
        } else if (previousSum < currentSum) {
            depthReport.addIncrease();
        }
        previousSum = currentSum;
        i++;
    } while (i < (array.length - 2));
}