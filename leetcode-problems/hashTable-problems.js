// Is array same
// - Write a function which accepts two arrays and check every value of the first
//      array has its corresponding in second array
// - The frequency value must be same

// function isArraySame(arr1, arr2) {
//    if(arr1.length !== arr2.length) return false

//    for(let i = 0; i < arr1.length; i++) {
//     let index = arr2.indexOf(arr1[i])
//     // console.log(index)
//     if(index === -1) {
//         return false
//     } else {
//         return true
//     }
//    }
// }

// console.log(isArraySame([7, 5, 6, 9], [9, 5, 6, 2]))

// function isArraySame(arr1, arr2) {
//        if(arr1.length !== arr2.length) return false

//        for(let i = 0; i < arr1.length; i++) {
//         if(arr1[i] in arr2) return true
//         else return false
//        }
//     }

// console.log(isArraySame([2, 5, 6, 9], [9, 8, 6, 2, 10]))

//// Time complexity O(n^2)
// function isArraySame(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false

//     for (let i = 0; i < arr1.length; i++) {
//         let index = arr2.indexOf(arr1[i])
//         // console.log(index)
//         if (index === -1) {
//             return false
//         } else {
//             arr2.splice(index, 1)
//         }
//     }
//     return true
// }

// console.log(isArraySame([2, 5, 6, 9], [9, 5, 6, 2]))

// function isArraySame(arr1, arr2) {
//     let hashTable1 = {}
//     let hashTable2 = {}

//     for (let elm of arr1) {
//         hashTable1[elm] = (hashTable1[elm] || 0) + 1
//     }

//     for (let elm of arr2) {
//         hashTable2[elm] = (hashTable2[elm] || 0) + 1
//     }
    
//     for(let elm in hashTable1) {
//         if(!elm in hashTable1 || hashTable1[elm] !== hashTable2[elm]) {
//             return false;
//         }
//     }
//     return true;
// }


// console.log(isArraySame([2, 5, 6, 9], [9, 5, 6, 2]));

// // =========================================================================
// Two sum
// function twoSum(arr, target) {
//     const hashT = {}; // 5
    
//     for(let i = 0; i < arr.length; i++) {
//         const want =  target -  arr[i]  // 7 - 2 = 5 // want = 5
//         if(want in hashT) {
//             console.log([hashT[want]])
//             // return [hashT[want], i] // 5, i = 1
//         }
//         hashT[arr[i]] = i;
//     }
    
// }

// console.log(twoSum([2,5,6, 9], 7))

//===============================================================================
// Sub array sum
// const subarraySum = function(nums, k) {
//     const hashTable = {
//         0: 1,
//     };

//     let sum = 0;
//     let result = 0
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         if([sum - k] in hashTable) {
//             result += hashTable[sum - k]
//         }
//         hashTable[sum] = (hashTable[sum] || 0) + 1
//     }
//     return result;
// }; 

// console.log(subarraySum([1, 1, 1], 2))