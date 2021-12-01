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
    evaluate: function(val_1, val_2) {
        console.log(`val_1: ${val_1}  val_2: ${val_2}`);
        if (val_1 < val_2) {
            this.addIncrease;
            return;
        } else if (val_1 > val_2) {
            this.addDecrease;
            return;
        } else return;
    },
};

fs.readFile("./01/01_input.txt", (err, data) => {
    if (err) throw err;
    let dataArray = dataToNumArray(data);
    console.log(dataArray);
    dataArray.sort(depthReport.evaluate());
    depthReport.print();
});

function dataToNumArray(data) {
    let stringArray = data.toString().split(",\n");
    let numArray = stringArray.map(Number);
    return numArray;
}