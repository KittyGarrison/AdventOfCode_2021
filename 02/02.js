console.log("Running file 02");

const fs = require("fs");

let positionReport = {
    depth: 0,
    advancement: 0,
    descend: function(distance) {
        this.depth = this.depth + distance;
        console.log(`Descending by ${distance}`);
    },
    ascend: function(distance) {
        this.depth = this.depth - distance;
        console.log(`Ascending by ${distance}`);
    },
    advance: function(distance) {
        this.advancement = this.advancement + distance;
        console.log(`Advancing by ${distance}`);
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
    console.log(dataArray);
    console.log(
        `Data ${Array.isArray(dataArray) ? "is" : "is not"} an array`
    );
    evaluate(dataArray);
    positionReport.print();
});

function dataToArray(data) {
    return data.toString().split("\n");;
}

function evaluate(array) {
    array.forEach((direction) => {
        directionArray = direction.split(" ");
        let distance = parseInt(directionArray[1]);
        switch (direction[0].charAt(0)) {
            case "u": // up
                positionReport.ascend(distance);
                break;
            case "d": // down
                positionReport.descend(distance);
                break;
            case "f": // forward
                positionReport.advance(distance);
                break;
            default:
                console.log(`No direction found in: ${direction}.`);
        }
    })
}