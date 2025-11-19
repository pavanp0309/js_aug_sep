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
// let arr1=[1,2,3,4,5,6,7,8,9,10]

// let even=[]
// console.table(arr1)
// for(let i=0;i<=arr1.length-1;i++){
//     console.log("i",i)
//     console.log(arr1[i])
//     if(arr1[i]%2==0){
//        even.push(arr1[i])
//     }
// }
// console.log(even)

// printing the array in reverse order
// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let newarr=[] //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// while(arr1.length>0){
//    let r= arr1.pop() // removes the last element
//    newarr.push(r) // push the element to the start
// }
// console.log(newarr)

// let newArr=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// let arr2=[]

// // console.log(newarr.length>0)
// // while(newArr.length)
// while(newArr.length>0){
//     let n=newArr.shift() //removes the first element from array
//     arr2.unshift(n) // used for adding the first element to an array
// }
// console.log(arr2)


// slice : extracting the part of array and doesnt modify the original array
// syntax :slice(startindex:number ,endindex:number)

// let newArr1=["start","🚗","🪂" ,"🏍","end","hi"]
//             //0       1     2     3    4      5
// console.log(newArr1)
// console.log(newArr1.slice())//consider start index as zero ['start', '🚗', '🪂', '🏍', 'end']
// console.log(newArr1.slice(2))//['🪂', '🏍', 'end']
// console.log(newArr1.slice(2,4))// ['🪂', '🏍']
// console.log(newArr1.slice(4,2))// startindex>endindex==[]
// console.log(newArr1.slice(-2))// length+(index)=>result 6+(-2)=4
// console.log(newArr1.slice(-2,-5))//  startindex>endindex==[]


// Splice : can extract(remove)/add the elements to specified positions it modifies the original array
//  syntax :splice(startindex,deletecount,addelement)
// let arr3=["🍎","🍌","java","python","🌶","🍊"]
//    ///      0    1     2     3        4    5    ==>length-6
// // // console.log(arr3.splice()) // []
// // console.log(arr3.splice(1)) // []
// // console.log(arr3.splice(1,1)) // ['🍌']
// // console.log(arr3.splice(1,3)) // ['🍌', 'java', 'python']
// console.log(arr3.splice(2,2,"🥕","🍇") )// ['🍌', 'java', 'python']
// console.log(arr3)



// write a function  double these numbers 
// let arr3=[1,2,3,4,5,6,7,8,9,10]

// function DoubleNumber(arr){//parameter
//     console.log(arr)//[1,2,3,4,5,6,7,8,9,10]
//     let dn=[]
//     // for(let i=0;i<arr.length;i++){
//     //     console.log("i",i)
//     //     console.log("values",arr[i])//accessing the value
//     //     console.log("dbnum",arr[i]*arr[i]) // doubling the number
//     //     dn.push(arr[i]*arr[i])
//     // }
//     // alternate
//     for(let val of arr){
//         dn.push(val*val)
//     }
  
//   return dn
// }

// let res=DoubleNumber(arr3)//argument
// console.log(res)


// // write a function to return all evennumbers doubled in a new array
// let arr4=[1,2,3,4,5,6,7,8,9,10]

// function evendoubled(arr){
//     let dbeven=[]
// //  for(let i=0;i<arr.length;i++){
// //      if(arr[i]%2==0){
// //         dbeven.push(arr[i]*arr[i]) // 
// //      }
// //  }
// for(let val of arr){
//      if(val%2==0){
//         dbeven.push(val*val) // 
//      }
// }
//  return dbeven
// }
// let res1=evendoubled(arr4)
// console.log(res1) 

// anonomous function syntax
// let arr4=[1,2,3,4,5,6,7,8,9,10]
// let res=arr4.map(function(ele,i,newarr){
//     console.log("ele",ele)
//     console.log("index",i)
//     return ele*ele
// })

// console.log(res)
// arrow function syntax
// let res1=arr4.map((ele,index,newarr)=>ele*ele) 
// console.log(res1)

// named function syntax
// function sample(ele,index,newarr){
//   console.log("ele",ele)
//     console.log("index",index)
//     return ele*ele
// }
// let res2=arr4.map(sample)
// console.log(res2)

// let arr4=[1,2,3,4,5,6,7,8,9,10]
// let res5=arr4.filter((ele,index,newarr)=>ele%2==0) 
// console.log(res5)

// let arr3=[1,3,4,5,6,6,,7]
// let arr4=["hi",,"hello"]
// arr3.map(ele=>console.log(ele*2))
// arr4.map(ele=>console.log(ele.toUpperCase()))

// let ar=[1,2,4,5,6]
    
// // let res=ar.reduce(function(accu,ele,index,newarr){},initialval)
// let res=ar.reduce(function(accu,ele,index,newarr){
//    console.log("accu➡",accu)
//    console.log("ele➡",ele)
//    console.log("index➡",index)
//    return accu+ele
// },0)
// console.log(res)

// write a program to print max the value in given array without using array methods
// write a program to print max the value in given array using reduce
// write a program to print min the value in given array without using array methods
// write a program to print min the value in given array using reduce
// write a program to print frequency of characters repeated in given array without using the array methods
// write a program to print frequency of characters repeated in given array with using the reduce

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// let data=[1,2,"a",3,4,5,"a"]
// let res=data.find((ele,index)=>{
// //  console.log(ele)
//  return ele == "a"
// })
// console.log(res)

// let product=[
//    {id:1,name:"nivea",price:20,q:10},
//    {id:2,name:"Dabur",price:10,q:30},
//    {id:3,name:"cookies",price:30,q:5},
// ]

// let cart=product.findIndex((ele,index)=>ele.name=="nivea")
// console.log(cart)

// write a program to return the person whose age greater that 30 and return index 
// and details of that person
let userdata=[ 
   {name:"ramu",age:20},
   {name:"raghu",age:50},
   {name:"rani",age:10},
   {name:"shiva",age:30},
]

// write a program to find the first product with both low stock and high demeand using the find method
// let product=[
//    {id:1,name:"iphone",demand:"high",stock:20},
//    {id:2,name:"vivo",demand:"low",stock:7},
//    {id:3,name:"sumsung",demand:"high",stock:4},
// ]
// // 
// let lowHighd=product.find((ele,index)=>ele.stock<20&&ele.demand=="high")
// let lowHighdindex=product.findIndex((ele,index)=>ele.stock<20&&ele.demand=="high")
// console.log(lowHighd)
// console.log(lowHighdindex)


// let data=[1,3,4,5,6,7,9]
// //o/p [1,9,16,25,36,49,81]
// let res=data.map(function(ele,index,newarr){
// //  console.log("Mele➡",ele)
// //  console.log("Mindex➡",index)
//  return  ele*ele
// })
// console.log("mans",res) // map methods returns an array with transformed values

// let res1=data.forEach(function(ele,index,newarr){
// //  console.log("Fele➡➡",ele)
// //  console.log("Findex➡➡",index)
//  return ele*ele
// })
// console.log("fans",res1) // foreach method doesnt return a new array


// let arr4=[1,2,5,6,7,8,9,10]
// let res=arr4.sort(function(a,b){
//  return a-b
// })
// console.log(res)

// write a program to print in ascending ascending decending order 
let arr5=[1,3,4,6,7,8,23,21,8,5,7,0,3].sort((a,b)=>a-b)
let arr6=[1,3,4,6,7,8,23,21,8,5,7,0,3].sort((a,b)=>b-a)
let arr7=[1,3,5,6,7,7].reverse()
console.log(arr7)