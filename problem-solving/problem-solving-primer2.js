//// maximum character and character count
// Given a string, return the character that is most
// commonly used in the string
// Example --
// maxChar("abccccccd") = "c"
// maxChar("apple 12311111") = "1"

// time complexity       O(n)
// space complexity       O(n)
// function maxChar(str) {
//     // flag variables
//     const charMap = {}
//     let max = 0;
//     let maxChar = '';
//     // loop through str and assign them in charMap
//     for (let char of str) {
//         charMap[char] = (charMap[char] || 0) + 1;
//     }
//     // loop through the charMap
//     for (let char in charMap) {
//         // count the the maximum character by using condition
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char
//         }
//     }
//     // return the result
// }

// maxChar("abcccccccd");

// ====================================================
// palindrome
// check provided string is palindrome 
// if palindrome return true otherwise return false
// non alphanumeric characters should be ignore
// example -- 
//      ("race car") should return true

// function isPalindrome(str) {
//     // normalize the string and remove non alphanumeric characters
//     const regEx = /[\W_]/g
//     const normalizeStr = str.toLowerCase().replace(regEx, '');
//     console.log(normalizeStr);

//     // reverse the string and assign in flag variable
//     const revStr = normalizeStr.split('').reverse().join('')

//     return normalizeStr === revStr
// }

// console.log(isPalindrome("race _car"))

// =======================================================
// Write a function that returns the number of vowels 
// used in a string. vowels are the characters 'a', 'e', 'i', 'o', 'u'
// Example ---
// vowels("Hi there") --> 3
// vowels("Why do you ask") --> 4

// function vowels(str) {
//     const normalizeStr = str.toLowerCase();
//     let count = 0;
//     // vowels
//     const collectedVowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of normalizeStr) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }

//         // time complexity       O(n^2)
//         // if(collectedVowels.includes(char)) {
//         //     count++
//         // }
//     }
//     console.log(count)
// }

// vowels("why you ask me")
// ==================================================================

// array chunk
// create sub array from a given array according to the given size
// Example ---
// chunkArr([1, 2, 3, 4, 5], 2) -- [[1, 2], [3, 4], [5]]

// function chunkArr(array, size) {
//     // flag variable
//     const chunked = [];
//     // loop through array
//     for(let elm of array) {
//         // track the index of last element and whether it exists or not
//         const last = chunked[chunked.length - 1];
//         if(last && last.length < size) {
//             last.push(elm);
//             console.log(last)
//         } else {
//             chunked.push([elm]);
//         }
//     }
//     console.log(chunked);
// }

// chunkArr([1, 2, 3, 4, 5], 2)

// // using while loop

// =============================================================================
// output -- 2 + 7 = 9 ==== [0,1]

// function twoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };
// console.log(twoSum([2,7,11,15], 9))

// function twoSum(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let tempSum;

//     while (left < right) {
//         tempSum = nums[left] + nums[right];
//         if (tempSum === target) {
//             left += 1
//             right += 1
//         }
//         if(tempSum > target) {
//             right --
//         } else {
//             left++
//         }
//     }

// };

// twoSum([2, 7, 11, 15], 9)