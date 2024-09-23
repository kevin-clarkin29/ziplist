"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
// Test zipList
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
function zipListTheFunctionalWay(list, list2) {
    const result = [];
    list.forEach((element, index) => {
        result.push(element, list2[index]);
    });
    return result;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
