// sum 2 numbers and return the result
// addition of the two numbers
// input - 10, 15 // 25
// input 20, 30 // output 50


// function sum(num1, num2) {
//     const numOne = Number(num1);
//     const numTwo = Number(num2);

//     return numOne + numTwo
// }

// const result = sum(10, '120')
// console.log(result);

// count the character
// inout - string 'Hello' output -{h: 1, e: 1, l: 2, o: 1}
// inout - string 'greet' output -{g: 1, r: 1, e: 2, t: 1}

   
// // time Complexity O(n)
// // space Complexity O(n)
// function countCharacter(str) {
//     // creating an object for tracking the frequency of element
//     const hashMap = {}

//     const normalizeCase = str.toLowerCase();
 
//     // looping the input and normalize the case
//     for (let i = 0; i < str.length; i++) {
//         const char = normalizeCase[i]
//         if (char === ' ') continue
//         // ternary
//         // char in hashMap ? hashMap[char] = hashMap[char] + 1 : hashMap[char] = 1;
//         hashMap[char] = (hashMap[char] || 0) + 1
//         // if there is any space in the input ignore it
//         // if (char in hashMap) {
//         //     // check if the element exist in the object increment the existent count
//         //     hashMap[char] = hashMap[char] + 1
//         // } else {
//         //     // if element not present assign the value 1
//         //     hashMap[char] = 1
//         // }
//     }
//     return hashMap
// }

// const result2 = countCharacter('He llo')
// console.log(result2);

// =========================================

// check the element of first array 2nd array
// if the element exist 
    // return true
    // otherwise return false
// input- arr1-['a', 'b', 'c'] arr2 -[1, 2, 3, 'z'] // false
// input- arr1-['a', 'b', 'c'] arr2 -[1, 2, 3, 'c'] // true

// time complexity      O(n^2)
// space complexity     O(1)
// function isElementExist(arr1, arr2) {
//     // flag variable
//     let exists = false
//     // looping through
//     for(let elm of arr1) {
//         if(arr2.includes(elm)) {
//             exists = true;
//             // break;
//         } 
//     }
//     return exists;
// }

// console.log(isElementExist(['a', 'b', 'c'], [1, 2, 3, 'c']));

// time complexity       O(n + m) = O(n)
// space complexity      O(n)
// function isElementExist(arr1, arr2) {
//     const frequencyCounter = {}
//     // loop through arr1
//     for(let elm of arr1) {
//         frequencyCounter[elm] = true;
//     }

//     // loop through arr2 and compare
//     let exists = false;
//     for(let elm of arr2) {
//         if(elm in frequencyCounter) {
//             // console.log(frequencyCounter)
//             exists = true;
//         } else {
//             exists = false;
//         }
//         // console.log(elm)
//     }
//     return exists;
// }

// console.log(isElementExist(['a', 'b', 'c'], [1, 2, 3, 'z']));
