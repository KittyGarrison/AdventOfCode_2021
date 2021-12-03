console.log("Running file 02.5");

// ✔︎ down X increases your aim by X units. 
// ✔︎ up X decreases your aim by X units.
// forward X does two things:
// ✔︎ It increases your horizontal position by X units.
// It increases your depth by your aim multiplied by X.

const fs = require("fs");

let positionReport = {
    depth: 0,
    advancement: 0,
    aim: 0,
    descend: function(distance) {
        this.aim = this.aim + distance;
        console.log(`Descending by ${distance}, aim has increaced`);
    },
    ascend: function(distance) {
        this.aim = this.aim - distance;
        console.log(`Ascending by ${distance}, aim has decreaced`);
    },
    advance: function(distance) {
        this.advancement = this.advancement + distance;
        this.depth = this.depth + (distance * this.aim);
        console.log(`Advancing by ${distance}, depth is now ${this.depth}`);
    },
    print: function() {
        console.log(
            `Current Count\nDepth: ${this.depth}\nAdvancement: ${this.advancement}\nProduct of Values: ${this.advancement*this.depth}`
        );
    },
};

fs.readFile("./02/02_input.txt", (err, data) => {
    if (err) throw err;
    let dataArray = dataToArray(data);
    evaluate(dataArray);
    positionReport.print();
});

function dataToArray(data) {
    return data.toString().split("\n");;
}

function evaluate(array) {
    array.forEach((instruction) => {
        instructionArray = instruction.split(" ");
        let distance = parseInt(instructionArray[1]);
        let direction = instructionArray[0];
        switch (direction) {
            case "up":
                positionReport.ascend(distance);
                break;
            case "down":
                positionReport.descend(distance);
                break;
            case "forward":
                positionReport.advance(distance);
                break;
            default:
                console.log(`No direction found in: ${direction}.`);
        }
    })
}