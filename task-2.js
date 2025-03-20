"use strict";

function makeArray(firstArray, secondArray, maxLength) {

    const intermediateArray = firstArray.concat(secondArray);
    const resultArray = [];

    for (let i = 0; i < maxLength; i += 1) {
        resultArray.push(intermediateArray[i])
    }
    return resultArray
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
