// MULTIPLE POINTERS

// // Sum Zero
// function zeroSum(nums) {
//    for(let i = 0; nums.length > 0; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//         if(nums[i] + nums[j] === 0) {
//             return [ nums[i], nums[j]]
//         } else {return undefined}
//     }
//    }
// }
// console.log(zeroSum([-3, -2, -1 , 0, 1, 2, 3]))
// console.log(zeroSum([5, 1, 2, 3]))

// function zeroSum(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         if (nums[left] + nums[right] === 0) {
//             return [nums[left], nums[right];
//         }
//         if (nums[left] + nums[right] > 0) {
//             right--
//         }
//         if (nums[right] + nums[left] < 0) {
//             left++
//         }
//     }
// }
// console.log(zeroSum([-3, -2, -1, 0, 1, 2, 3]))
// [-3, -2, -1 , 0, 1, 2, 3]  // -3 + 3 = 0
//   l                     r

// // ====================================================
// Time complexity O(n^2)
// function areThereDuplicates(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 return true
//             } else {
//                 return false
//             }
//         }
//     }
// }

// console.log(areThereDuplicates([1, 1, 2, 3]))
// console.log(areThereDuplicates([1, 6, 5, 8, 3]))

// Space complexity O(n)
// function areThereDuplicates(arr) {
//     const hashT = {};
//     for(let elm of arr) {
//         hashT[elm] = (hashT[elm] || 0) + 1;
//     }

//     for(let elm in hashT) {
//         // console.log(hashT[elm]);
//         if(hashT[elm] > 1) {
//             return true
//         } else return false;
//     }
// }

// console.log(areThereDuplicates([1, 2, 3]))

// using multiple pointers
// function areThereDuplicates(arr) {
//     let i = 0;

//     while (i < arr.length) {
//         if(arr[i] === arr[i + 1]) return true
//         i++
//     }
//     return false;
// }

// console.log(areThereDuplicates([1, 1, 1, 1, 2, 3]))
// console.log(areThereDuplicates([1, 2, 3, 4, 5]))