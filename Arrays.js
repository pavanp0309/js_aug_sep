// It is a container that holds a collection of elements of various types of data, including 
// numbers, strings, objects, Boolean values and even other arrays.


// Different ways to create arrays 
// 1.using array literals =[]
// 2.using array global keyword 
// 3.using new Keyword 


// 1.Create
// let data=["hii",2,3,5]
// //         0    1 2 3
// console.log(data)
// console.log(data.length)

// CRUD 
// C:Create 
// R:read
// u:Update
// d:delete

// to access the element (Reading the values)
// console.log(data[0])// first value
// console.log(data[data.length-1])// firstvalue value

// Update the value
// data[2]="hello"
// data[10]="hello"
// console.log(data)//['hii', 2, 'hello', 5, empty × 6, 'hello']
// console.log(data[6])// undefined
// console.log(data[5])// undefined

// // delete
// delete data[1]
// console.log(data)

// Basic Methods 
// 1.push            8.lastindexOf 
// 2.pop             
// 3.shift 
// 4.unshift
// 5.slice
// 6.splice
// 7.indexOf 

// Higher order Methods 
// 1.Map                6. find 
// 2.filter             7. flatten
// 3.reduce             8. reverse 
// 4.foreach            9. sort  etc ..
// 5.findIndex


// 1.PUSH:Appends new elements to the end of an array, and
//  returns the new length of the array
let arr=[1,2]
// console.log(arr.push("last"))//3
// console.log(arr.push(4))//4
// console.log(arr.push(true))//5
// console.log(arr)//[1, 2, 'last', 4, true]

// 2.POP :Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr.pop())//true
// console.log(arr.pop())//4
// console.log(arr)//[1, 2, 'last']

// 3.Shift : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr)// [1, 2]
// console.log(arr.shift())// 1

// 4.unshift 
// console.log(arr.unshift("firstele"))//3
// console.log(arr)// ['firstele', 1, 2]

// write a program to print all even number in a new array 
let arr1=[1,2,3,4,5,6,7,8,9,10]

let even=[]
console.table(arr1)
for(let i=0;i<=arr1.length-1;i++){
    console.log("i",i)
    console.log(arr1[i])
    if(arr1[i]%2==0){
       even.push(arr1[i])
    }
}
console.log(even)
