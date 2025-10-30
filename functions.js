// function are reuseable block of code  we write once and reuse it as many number of times required
// Types of Function 
// 1.Named function 
// 2.anonomous function  
// 3.arrow function 
// 4.iffe (Immediately invoked function expression)\
// 5.Genarator function 
// 6.function expressions
// 7.callback functions 

// 1.Named function

// function declaration 
// function Data(a,b){//the varaibles that are passed in function declaration are called as parameters,params,formal arguments
//   console.log("welcome")
//   return  // returns the values for further use and return statement is the last statement for any function excution 
// //   1. function with empty return & without return statement  will return undefined 
//   console.log("welcome")//Unreachable code detected.
// }

// //function call
// Data(1,3)// these are actual values (all primitive and non-primitive) those are called actual aruguments

function Add(a,b){
 console.log("adding to values")
 console.log("a",a)
 console.log("b",b)
 console.log(a+b)
}

// Add(10,5)
// // passing single value will result in unexcepted error
// Add(10)
// Add("hello","ravi")
// Add("hello")


// defualt paramters 
// before es6 
function Sub(a,b){
  console.log("a:",a,"b:",b)
  if(b==undefined){
     b=10
  }
 console.log(a+b)
}

// Sub(10)
// Sub(10,30)

// After es6 
function Sub1(a=0,b=0){
  console.log("a:",a,"b:",b)

 console.log(a+b)
}

// Sub1(10)
// Sub1(10,30)


// problem
function Multiply(a,b,c){
  console.log("a:",a,"b:",b,"c:",c)
}

// Multiply(2,3,5)
// Multiply(2,3,5,5,6,7,8)

// solution: rest paramters (...variable_name)
// all remaining values will be collected in array format
// Rest parameter must be last formal parameter
function Multiply1(a,b,c,...r){
  console.log("a:",a,"b:",b,"c:",c,"r",r)
  // r (4) [5, 6, 7, 8]
  // repating through loops
  // for(let i=0;i<r.length;i++){
  //   console.log(r[i])
  // }
  // r.map(ele=>console.log(ele))

}

// Multiply1(2,3,5)
// Multiply1(2,3,5,5,6,7,8)


// rest parameter 
// //     0 1 2 3 4
// let a=[1,2,3,4,5]

// console.log(a[0])//1
// console.log(a[3])//4
// const [r,e,...t]=a// destructuring 
// console.log(e)
// console.log(r)
// console.log(t)

// // spread operator 
// const b=[...a,4,5,...a]
// console.log(b)


// return 
function Example(a,b){
  console.log(a+b)
  // function with empty or without return will result in undefined 
  return
}
let res=Example(1,5)
console.log(res*20)

// return value as number 
function Example1(a,b){
  console.log(a+b)
  // function with empty or without return will result in undefined 
  return a+b
}
// let res1=Example1(1,5)
// console.log(res1*20)
// console.log(res1-20)
// console.log(res1+20)

// return value as object 
function Example1(a,b){
  console.log(a+b)
  // function with empty or without return will result in undefined 
  return {
    name:"raju",
    result:a+b
  }
}
// let res4=Example1(1,5)
// console.log(res4)//{result: 6}
// console.log(res4.result)//{result: 6}

let ob={
  // property:value
  name:"raju",
  result:{
    marks:20
  }
}
// console.log(ob)
// console.log(ob.name)
// console.log(ob.result.marks)


function Example2(a,b){
  console.log(a+b)
  // function with empty or without return will result in undefined 
  return ["raju",a+b] //"",true ,function(){}
}
let res5=Example2(1,5)
console.log(res5)// ['raju', 6]
console.log(res5[1])// 6


function Calculate(a,b){
  return{
    add:a+b,
    sub:a-b,
    mul:a*b
  }
}

let result=Calculate(1,3)
console.log(result.add)
console.log(result.sub)
console.log(result.mul)

// (year%4==0 && year%100!=0 || year%400==0)
// if(year%4==0){
//   if(year%100==0){
//     if(year%400==0){

//     }
//   }
// }