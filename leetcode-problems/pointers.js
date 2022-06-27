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

// Using multiple pointers
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
// Are there any duplicates?
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

// Using hashMap
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

// Using multiple pointers
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

// // ================================================================
// Valid palindrome
// const isPalindrome = function(str) {
//     const normalizeStr = str.replace(/[\W_]/g, '').toLowerCase();
    
//     for(let i = 0; i < normalizeStr.length; i++) {
//         for(let j = normalizeStr.length - 1; j >= 0; j--) {
//             if(normalizeStr[i] === normalizeStr[j]) {
//                 return true;
//             }
            
//         }
//     }
//     return false;
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Using hashmap
// const isPalindrome = function(str) {
//     const normalizeStr = str.replace(/[\W_]/g, '').toLowerCase();
//     const hashTable = {};

//     for(let elm of normalizeStr) {
//         hashTable[elm] = (hashTable[elm] || 0) + 1;
//     }

//     for(let i = normalizeStr.length - 1; i >= 0; i--) {
//         if(normalizeStr[i] in hashTable) {
//             return true;
//         }
//     }
//     return false;
    
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Using Pointers
// const isPalindrome = function(str) {
//         const normalizeStr = str.replace(/[\W_]/g, '').toLowerCase();

//         let left = 0;
//         let right = normalizeStr.length - 1

//         while(left < right) {
//             if(normalizeStr[left] !== normalizeStr[right]) return false;
//             left++
//             right--
//         }
//         return true;
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("Race a car"))