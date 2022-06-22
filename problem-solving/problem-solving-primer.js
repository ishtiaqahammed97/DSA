// fizz buzz
// write a program that prints numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the
// multiples of five print "Buzz". For the numbers which multiples of both three and five print "FizzBuzz"

// function fizzBuzz(num) {
//     // flag variable
//     let char = ''
//     // loop through num
//     for(let i = 1; i <= num; i++) {
//         // use condition
//         if(i % 3 === 0  && i % 5 === 0) {
//             char += 'FizzBuzz \n'
//         } else if(i % 3 === 0) {
//             char += 'Fizz \n'
//         } else if (i % 5 === 0) {
//             char += 'Buzz \n'
//         } else {
//             char += i + '\n'
//         }
//     }
//     return char
// }

// const result = fizzBuzz(100);
// console.log(result);

// ========================================
// Adding sum from an array

// you have been provided an array of number
// you have to sum the numbers

// function sum(arr) {
//     // flag variable
//     let result = 0;
//     // loop through
//     for(let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }

// sum([10, 15, 30, 5]);

// ============================================
// // Finding out max or min numbers
// // you have been provided an array of number

// function min(arr) {
//     // flag variable
//     let minNumber = arr[0]
//     // traverse through array and
//     for(let num of arr) {
//         // compare the numbers
//         if(num < minNumber) {
//             minNumber = num;
//         }
//     }

//     // using Math.max()
//     // console.log(Math.min(...arr))
// }
// min([3, 1, 10, 12, 6]);

// max number
// function max(arr) {
//     // flag variable
//     let maxNumber = arr[0]
//     // traverse through array and
//     for(let num of arr) {
//         // compare the numbers
//         if(num > maxNumber) {
//             maxNumber = num;
//         }
//     }
//     console.log(maxNumber)
// }
// max([3, 1, 10, 12, 6]);

// ==============================================
// string reversal
// given a string, return a new string with the reversed
// order of the characters
// -------- Example
// reverse('apple') = 'elppa'
// reverse('hello') = 'olleh'
// reverse('greetings') = 'sgniteerg'

// function reverse(str) {
//     //// Traditional/ manual way
//     // // flag variable 
//     // let revStr = ''
//     // // run a reverse loop
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     revStr += str[i]
//     // }
//     // console.log(revStr)

//     //// Using for of loop
//     // for (let char of str) {
//     //     revStr = char + revStr
//     // }
//     // console.log(revStr);

//     //// Using reverse() method
//     // console.log(normalStr)
// //     const reverseStr = str.split('').reverse().join('');

// //     console.log(reverseStr)
// // }

// // reverse('Godown');

// =========================================================
// integer reversal
// Given an integer, return the integer that is the reverse
// ordering of numbers
// Example -- 
//         reverseInt(51) = 15
//         reverseInt(13) = 31
//         reverseInt(-90) = -09

// function reverseInt(num) {
//     // change to string and then reverse it
//     let reverseNumber = num.toString().split('').reverse().join('')
    
//     // validate the result
//     if (reverseNumber.endsWith('-')) {
//         reverseNumber = '-' + reverseNumber.slice(0, reverseNumber.length -1)
//     }
    
//     // console.log(Number(reverseNumber))
//     // return reverseNumber
// }

// reverseInt(-90);
