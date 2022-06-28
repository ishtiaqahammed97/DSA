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

// [1, 2, 5, 2, 8,  1, 5]
// 1 + 2 = 3
// 3 -1 + 5 = 7
// 7 - 2 + 2 = 7
// 7 - 5 + 8 = 10
// 10 - 2 + 1 = 9
// 9 - 8 + 1 = 2
// 2 - 1 + 5 = 6

// ======================================================
// const maxSubArray = function(nums) {
//     let curSum = nums[0];
//     let max = curSum; 

//     for(let i = 1; i < nums.length; i++) {
//         curSum = Math.max(curSum + nums[i], nums[i])
//         max = Math.max(max, curSum)
//     }
//     return max
// };

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

// kadane's algorithm
// [-2,1,-3,4,-1,2,1,-5,4]
// [-2, 1] cur_sum = -1                            max_sum = 3
// [1, -3] cur_sum = -2
// [-1, -3] cur_sum = -4
// [-4, 4] cur_sum = 0
// [0, -1] cur_sum = -1
// [-1, 2] cur_sum = 1
// [1, 1] cur_sum = 2
// [2, 1] cur_sum = 3
// [3, -5] cur_sum = -2
// [-2, 4] cur_sum = 2

// // ==================================================

// const lengthOfLongestSubstring = function (s) {
//     let i = 0;
//     let j = 0;
//     let max = 0;
//     let uniqueSet = new Set();

//     while(i < s.length) {
//         if(!uniqueSet.has(s[i])) {
//             uniqueSet.add(s[i])
//             max = Math.max(max, uniqueSet.size);
//             i++
//         } else {
//             uniqueSet.delete(s[j])
//             j++
//         }
//     }
//     console.log(max)
// };
// lengthOfLongestSubstring("abcabcbb")

// "abcabcbb"
// i
// j
// abc 3
// bca
// cb
// b

// // ====================================================
// const minSubArrayLen = function(nums, target) {
//     let left = 0;
//     let result = Infinity
//     let val_sum = 0

//     for(let i = 0; i < nums.length; i++) {
//         val_sum += nums[i]
//         while(val_sum >= target) {
//             result = Math.min(result, i + 1 - left)
//             val_sum -= nums[left]
//             left++
//         }
//     }
//     result = result === Infinity ? 0 : result
//     console.log(result)
// };

// minSubArrayLen([2,3,1,2,4,3], 7)
// minSubArrayLen([1,1,1,1,1,1,1,1], 11)
