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


// // defualt paramters 
// // before es6 
// function Sub(a,b){
//   console.log("a:",a,"b:",b)
//   if(b==undefined){
//      b=10
//   }
//  console.log(a+b)
// }

// // Sub(10)
// // Sub(10,30)

// // After es6 
// function Sub1(a=0,b=0){
//   console.log("a:",a,"b:",b)

//  console.log(a+b)
// }

// // Sub1(10)
// // Sub1(10,30)


// // problem
// function Multiply(a,b,c){
//   console.log("a:",a,"b:",b,"c:",c)
// }

// // Multiply(2,3,5)
// // Multiply(2,3,5,5,6,7,8)

// // solution: rest paramters (...variable_name)
// // all remaining values will be collected in array format
// // Rest parameter must be last formal parameter
// function Multiply1(a,b,c,...r){
//   console.log("a:",a,"b:",b,"c:",c,"r",r)
//   // r (4) [5, 6, 7, 8]
//   // repating through loops
//   // for(let i=0;i<r.length;i++){
//   //   console.log(r[i])
//   // }
//   // r.map(ele=>console.log(ele))

// }

// // Multiply1(2,3,5)
// // Multiply1(2,3,5,5,6,7,8)


// // rest parameter 
// // //     0 1 2 3 4
// // let a=[1,2,3,4,5]

// // console.log(a[0])//1
// // console.log(a[3])//4
// // const [r,e,...t]=a// destructuring 
// // console.log(e)
// // console.log(r)
// // console.log(t)

// // // spread operator 
// // const b=[...a,4,5,...a]
// // console.log(b)


// // return 
// function Example(a,b){
//   console.log(a+b)
//   // function with empty or without return will result in undefined 
//   return
// }
// // let res=Example(1,5)
// // console.log(res*20)

// // return value as number 
// function Example1(a,b){
//   console.log(a+b)
//   // function with empty or without return will result in undefined 
//   return a+b
// }
// // let res1=Example1(1,5)
// // console.log(res1*20)
// // console.log(res1-20)
// // console.log(res1+20)

// // return value as object 
// function Example1(a,b){
//   console.log(a+b)
//   // function with empty or without return will result in undefined 
//   return {
//     name:"raju",
//     result:a+b
//   }
// }
// // let res4=Example1(1,5)
// // console.log(res4)//{result: 6}
// // console.log(res4.result)//{result: 6}

// let ob={
//   // property:value
//   name:"raju",
//   result:{
//     marks:20
//   }
// }
// // console.log(ob)
// // console.log(ob.name)
// // console.log(ob.result.marks)


// function Example2(a,b){
//   console.log(a+b)
//   // function with empty or without return will result in undefined 
//   return ["raju",a+b] //"",true ,function(){}
// }
// // let res5=Example2(1,5)
// // console.log(res5)// ['raju', 6]
// // console.log(res5[1])// 6


// // function Calculate(a,b){
// //   return{
// //     add:a+b,
// //     sub:a-b,
// //     mul:a*b
// //   }
// // }

// // let result=Calculate(1,3)
// // console.log(result.add)
// // console.log(result.sub)
// // console.log(result.mul)


// // Named Function 
// // requires function keyword ,{},,() return 
// function Example(){
//   return
// }

// // let res1=Example()


// // arrow  : are syntatic sugar of named function 

// // let res3=()=>{} // syntax of arrow function 

// // // arrow function are called with variable name 
// // res3()


// // 1.doesnt require function keyword 
// // 2.paranthesis  are not required when pass singel parameter 
// let res4=a=>{console.log(a)}
// // a is paramter here
// // res4(10)
// // 3.it requires paranthesis when we pass multiple paramters
// let res5=(a,b)=>{console.log(a)}

// // 4.arrow doesnt require return statement when we pass single statement/expression
// let arr1=(a,b)=>a+b
// let res=arr1(1,8)
// console.log(res)

// function Example(a,b){
//   return a+b //without return will get undefined as avalue
// }
// let res2=Example(1,8)
// console.log(res2)

// // 5.arrow function require return statement and curly braces if we pass more than one expression
// let arr3=(a,b)=>{
// return   {add:a+b ,sub:a-b}
// }

// let res6=arr3(1,8)
// console.log(res6)

// // this used for pointing to object location based on the context it is used 

// // object : realworld entity which as key and values pairs 
// console.log(this) // global window object

// function Data(){
//   console.log(this)
// }
//  Data()


// //  arrow function shouldnot be used as methods of an object and constructor function as well

//  let user={
//    name:"raju",
//   //  method
//    details:function data(){
//      console.log(this.name)
//    }
//  }

//  console.log(user.name)
//  console.log(user.details())


// //  arrow function doesnt have its argumenent object 
// // function user1(){
// //  console.log(...arguments)
// // }

// // user1(1,3,5,6)

// // let user2=()=>{
// //  console.log(...arguments)
// // }

// // user2(1,3,5,6)

// let title="guess"

// let data={
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// },
// details:()=>{
//   console.log(this.title)
// }
// }

// data.details()


// Gues() //not defined  error  hello non-above
// function Gues(){
// console.log("hello")
// }
// Gues() 
// debugger;
// console.log(a)
// var a=()=>{console.log("hello")}


// let weight=parseInt(prompt("enter a weight"))
// let loc=prompt("enter a location").toLowerCase()
// // document.write(loc)


// // domestic : <1kg-5   1>5--10  5kg-20
// // international :<1kg-10 1-5-25 >50

// let price=(location==="domestic")?(weight<1?5:(weight<=5?10:20)):
// (location==="international")?(weight<1?10:(weight<=5?25:50)):
//  "choose the proper loc"

// console.log(price)


// anonoumous function/function expression L function without name 

let an=function (a,b){ //parameters: params
  console.log("welcome")
  return "hii"
}
// function is called with varaible name
let r=an(3,4) //  //argument
console.log(r)


// addtocart() // typeerror when var keyword is used //reference error when used with let
// debugger;
// // it shouldnot be called before its declaration 
// let addtocart=function (){
// console.log("helloo")
// }
// addtocart()

// var a=10
// let ac=(function (){
//   var b=20
// })()
// console.log(a)//10-2 20-->3
// console.log(b)//10-2 20-->3
// // IIFE 
// let res=(function(){console.log("gues who i am")})()



// let a=10

// {
// let a=20
// }

// console.log(a)//20

function* Data(){
   yield "hii"
   yield "welcome"
}

let res=Data()
console.log(res.next().value)
console.log(res.next().value)
console.log(res.next().value)
