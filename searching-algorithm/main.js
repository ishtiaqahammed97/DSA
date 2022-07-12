// Searching algorithm
// indexOf (3, -1)
// includes(true, false)

// [1, 3, 5, 7, 9]

// time complexity - O(n)
// linear search
// function searchElement(arr, searchElm) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === searchElm) {
//             return i
//         }
//     }
//     return -1;
// }

// console.log(searchElement([1, 3, 5, 7, 9], 7))

// Binary search / Divide and conquer
// array must be sorted
// function searchElement(arr, searchElm) {
//     let low = 0;
//     let high = arr.length - 1

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         let midValue = arr[mid];

//         if (midValue === searchElm) return mid;
//         if (searchElm > midValue) {
//             low = mid + 1
//         } else {
//             high = mid - 1;
//         }
//     }
//     return -1;
// }

// console.log(searchElement([1, 3, 5, 7, 9], 7))


/**
[1, 3, 5, 7, 9, 10]         0 + 5/2 = 2.5 = 2
 l     m         h

 [1, 3, 5, 7, 9, 10]         0 + 5/2 = 2.5 = 2
            l  m    h
 // // check wether 7 is greater or less than middle
*/

/**
 * relation
 * logarithm
 * 16 = log2^16 = 4
 *
 * 2^4 = 16 // log(n)
 */

/**
 * 16 /2 = 8
 * 8 / 2 = 4
 * 4 / 2 = 2
 * 2 / 2 = 1
 */

// // // problem number 35(leetcode) solved

// // ==================================================
// time complexity O(n * m)
// space complexity O(1)
// string searching
// const strStr = function (haystack, needle) {
//     if (needle === '') return 0;
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         let j = 0;
//         for (; j < needle.length; j++) {
//             if (haystack[i + j] !== needle[j]) break
//         }
//         if (j === needle.length) return i
//     }
//     return -1
// };

// console.log(strStr('hello', 'll'))



/** 
 i
 hello
 ll
 j 

 */