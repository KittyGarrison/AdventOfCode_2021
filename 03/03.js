console.log("Running file 03");
const fs = require("fs");

fs.readFile("./03/input.txt", (err, data) => {
  if (err) throw err;
  let dataArray = dataToArray(data);
  let positionArray = expand(dataArray);
  let gammaRateString = findGammaRate(positionArray);
  let gammaRateDecimal = parseInt(gammaRateString, 2);

  console.log(` Gamma rate: ${gammaRateDecimal}`);
});

// Converts data file to an array of strings
function dataToArray(data) {
  return data.toString().split("\n");
}

// Converts an array of strings into an array that contains an array of the strings cahracters
// Example:
// ["abc", "123"] becomes [["a","b","c"], ["1","2","3"]]
function expand(ary) {
  let expandedAry = [];
  ary.forEach((value) => {
    let binaryArray = value.split("");
    if (expandedAry.length === 0) {
      console.log("adding first array");
      createMetaArray(binaryArray, expandedAry);
    } else {
      for (let i = 0; i < binaryArray.length; i++) {
        const bit = binaryArray[i];
        // console.log(`Pushing ${bit} to ${expandedAry[i]}`);
        expandedAry[i].push(bit);
      }
    }
  });
  return expandedAry
}

//  
function createMetaArray(array, parentArray) {
  array.forEach((item) => {
    let childArray = new Array(item);
    // console.log(
    //   `Child Array ${
    //     Array.isArray(childArray) ? "is" : "is not"
    //   } an array.`
    //   );
      parentArray.push(childArray);
    });
  }
 
 function findGammaRate(ary){
   let gammaRate = ""
   ary.forEach(subArray => {
     let mode = modeOfSubArray(subArray)
    //  console.log(mode);
    gammaRate = gammaRate + mode.toString(); 
   });
   return gammaRate
 }
  
function modeOfSubArray(ary){
  return highestValue(countOccurance(ary))
}

  function countOccurance(ary){
    let valueCounts = {};
    ary.forEach(value => {
      if (valueCounts[value]) {
        valueCounts[value]++
      }else {
        valueCounts[value] = 1
      }
    });
    return valueCounts
  }
  
  function highestValue(obj) {
    return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  }
  
  // let testObj = {
    //   1 : 6,
    //   0 : 12
    // }
    // console.log(highestValue(testObj));
    
    
    // data set array
    // if it is empty add bits as new array
    // else add bits to each array
    
    // function printEachLength(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         const subArray = array[i]
    
    //     console.log(`Length of sub array ${i + 1}: ${subArray.length}`);
    //   };
    // }