// // Kadane's algorithm
// [1, 2, 5, 2, 8, 1, 5]
// 1, 2
// 2, 5,
// 5, 2
// 2, 8
// Write an efficient program to find the sum of the contiguous subarray within a one-dimensional array
// of numbers that has the largest sum. 

// function maxSubarraySum(arr, num) {
//     if(arr.length < num) {
//         return null
//     }
//     let max = - Infinity;
//     for(let i = 0; i < arr.length - num + 1; i++) {
//         tempSum = 0
//         for(let j = 0; j < num; j++) {
//             tempSum += arr[i + j];
//         }
//        max = Math.max(max, tempSum)
//     }
//     return max
// }

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
// 1 + 2 = 3
// 2 + 5 = 7
// 2 + 8 = 10

// function maxSubarraySum(arr, num) {
//     if (arr.length < num) {
//         return null
//     }

//     let max = 0;
//     for(let i = 0; i < num; i++) {
//         max += arr[i]
//     }
//     let tempSum = max;

//     for(let j = num; j < arr.length; j++) {
//         tempSum = tempSum - arr[j -num] + arr[j]
//         max = Math.max(tempSum, max);
//     }
//     return max
// }

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)

// // Kadane's algorithm
// [1, 2, 5, 2, 8,  1, 5]
// 1 + 2 = 3
// 3 -1 + 5 = 7
// 7 - 2 + 2 = 7
// 7 - 5 + 8 = 10
// 10 - 2 + 1 = 9
// 9 - 8 + 1 = 2
// 2 - 1 + 5 = 6
