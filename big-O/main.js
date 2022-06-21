// Big(O)
// how number of operation increases/relates with input
// Best case (omega)
// average case (theta)
// worst case (O)

// =======================================================
// linear Big(O) - O(n)
// function log(n) {
//     for(let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// log(10);

// =======================================================
// quadratic
// 3^2 = 9
// Big(O) = O(n^2)
// function log(n) {
//     let count = 0;
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             count++
//             console.log(i)
//         }
//     }
//     console.log(count)
// }

// log(3);

// but here inside the nested loop, operation is not dependent on input
// Big(O) = 2n = O(n)
// function log(n) {
//     let count = 0;
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < 2; j++) {
//             count++
//             console.log(i)
//         }
//     }
//     console.log(count)
// }

// log(3);

// =======================================================
// Big(O) = n + n = 2n = O(n)
// function log(n){
//     let count = 0;
//     for(let i = 0; i < n; i++) {
//         count++
//         console.log(i)
//     }
//     for(let i = 0; i < n; i++) {
//         count++
//         console.log(i)
//     }
//     console.log(count)
// }
// log(5)

// =======================================================
// Big(O) = O(n * n * n) = O(n^3)
// function log(n) {
//     let count = 0;
//     for(let i = 0; i < n; i++) {
//         count++
//         for(let j = 0; j < n; j++) {
//             count++

//             for(let k = 0; k < n; k++) {
//                 count++
//                 console.log(i,j,k)
//             }
//         }
//     }
//     console.log(count)
// }
// log(2)

// =======================================================
// Big(O) = O(n^2 + n) = O(n^2)
// function log(n) {
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             console.log(i, j)
//         }
//     }

//     for(let k = 0; k < n; k++){
//         console.log(k)
//     }
// }
// log(5)

// =======================================================
// constant
// Big(O) = O(1)
// function addItem(n) {
//     console.log(n + n + n);
// }
// addItem(10)

// =======================================================
// if the input is less than 5, Big(O) = O(1) -- best case
// if the input is more than 5, Big(O) = O(n) -- worst case

// function addAtLeast5(n) {
//     for(let i = 0; i <= Math.max(5, n); i++) {
//         console.log(i)
//     }
// }
// // addAtLeast5()
// addAtLeast5(6)

// =======================================================
// Big(O) = O(1) -- for any input wether more or less
// function addAtLeast5(n) {
//     for(let i = 0; i <= Math.min(5, n); i++) {
//         console.log(i)
//     }
// }
// addAtLeast5(6)

// =======================================================
// Big(O) = O(m + n)
// here the function take two parameter, therefore two loop work with the two parameter
// function logTwoParameters(a, b) {
//     for(let i = 0; i < a; i++) {
//         console.log(i)
//     }

//     for(let j = 0; j < b; j++) {
//         console.log(j)
//     }
// }
// logTwoParameters(3, 5)

// ============== Space Complexity ================
// for primitive data Big(O) = O(1)
// but for string data Big(O) = O(n)
// for array Big(O) = O(n)
// for object Big(O) = O(n)

// const name = 'jafjkndjkfn' // O(n)

// const array = [1, 2 , 3]  // O(n)

// const obj = {
//     name: 'name',
//     email: 'email@example.com'
// } // O(n)