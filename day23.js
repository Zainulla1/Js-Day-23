//Question: Remove duplicates from an Array
const arr = [2, 3, 5, 3, 6, 8, 9, 2, 11, 5];

const strArr = ['Mike', 'John', 'Nancy', 'Thomas', 'Nancy', 'Peter', 'Mike'];

//objects are collected in values.
//A value in the set may only occur once; it is unique in the set's collection.
const resultArr = [...new Set(arr)];

console.log(resultArr);

const resultStringArr = [...new Set(strArr)];

console.log(resultStringArr);