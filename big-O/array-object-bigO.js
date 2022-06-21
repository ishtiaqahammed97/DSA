// Array and object(performance) - Big(O)
// const arr = ['a', 'b', 'c'];
        //   0     1    2
// console.log(arr.length);

// access by index                       O(1)
// at the end of the array               O(1)
// console.log(arr.length - 1);

// adding item / element
// arr[arr.length] = 'd'
// arr.push('d')

// removing element from end of array           O(1)
// arr.pop()

// add item at the beginning of the array       O(n)
// arr.unshift('d')

// removing element from the beginning of the array O(n)
// arr.shift()

// finding element from an array O(n)
// for(let elm of arr) {
//     if(elm === 'c') {
//         console.log(elm);
//     }
// }

// =======================================================

// forEach, map. reduce, find, filter, slice, splice O(n)

// =======================================================



// object

// const obj = {
//     name: 'name',
//     email: 'email@example.com',
//     // '2email': 'invalid key'
// }

// accessing element                    O(1)
// console.log(obj.name);
// console.log(obj['email'])

        
// Object.keys()        O(n)
// Object.values()      O(n)
// Object.entries()     O(n)


// for(let key in obj) {
//     console.log(obj[key]);
// }

// adding/ inserting element O(1)
// obj.profession = 'programmer';
// console.log(obj.profession);

// delete element O(1)
// delete obj.email
// console.log(obj);

// searching element O(1)
// if we use for in loop - O(n)
// console.log('email' in obj);

// ==========================================
// when to use object
        // when order is not important
        // adding too much element
        // need to search too much
        // when you need faster access or removal

// when to use array
        // if order is important
        // adding/removal element from end