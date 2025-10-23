// variables are container used for storing the datatypes(values or information)
   
// Indentifier Rules 
//  1.Indentifiers should not start with numbers and special character(& * ^%)  expecct $ & _ 
var fullname;
// An identifier or keyword cannot immediately follow a numeric literal
// var 5fullname; //❌
// var ^fullname //❌ Uncaught SyntaxError: Unexpected token '^' (at varaibles.js:8:5)
var $fullname ; //✅
var _fullname ; //✅


// 2. it should contain the reserved keyword (var let const funtion for if else while class )
var good;
// var var; // 'var' is not allowed as a variable declaration name.
// var for; // 'for' is not allowed as a variable declaration name.
// var while; // 'while' is not allowed as a variable declaration name.
// var function; // 'while' is not allowed as a variable declaration name.

// 3. it should contain white space eg : var full name  💮  var full_name 
// var full name ; //Uncaught SyntaxError: Unexpected identifier 'name'
var full_name ; //✅




// DECLARATION 
// var a;
// console.log(a)
// var b=10;
// console.log(b)


// DIFFERENCE 
// var a;
// let b;
// 'const' declarations must be initialized.
// const c; //Uncaught SyntaxError: Missing initializer in const declaration
// const c=10; //Uncaught SyntaxError: Missing initializer in const declaration


// Redeclaration 

// scope :  lifetime of varaible (accessiability of variable with code or file)
    //    1.global sccope :   can be accessed everywhere within the code  (inside the block inside the fuction or class or outside block or fucntion of class)
    //  2.Local scope :
            //    block scope  :  { let a} 
            //    function scope function sample(){}
            //    module sccope 

// global scope
// var a=10
// let b=30
// const c=40

// console.log("g-a:",a)
// console.log("g-b:",b)
// console.log("g-c:",c)


// block scope
{
// console.log("g-a:",a)
// console.log("g-b:",b)
// console.log("g-c:",c) 
// console.log("⭐⭐block scope⭐⭐")
// var a=10
// let b=30
// const c=40
// console.log("b-a:",a)
// console.log("b-b:",b)
// console.log("b-c:",c) 

}
// console.log("⭐⭐-outside of block scope⭐⭐")
// console.log("b-a:",a)
// console.log("b-b:",b) //Uncaught ReferenceError: b is not defined
// console.log("b-c:",c) //Uncaught ReferenceError: c is not defined


// function scope
// function sample(){
//     // console.log("g-a:",a)
// // console.log("g-b:",b)
// // console.log("g-c:",c)
//     console.log("⭐⭐fn scope⭐⭐")
// var a=10
// let b=30
// const c=40
//     console.log("f-a:",a)
//     console.log("f-b:",b)
//     console.log("f-c:",c)
// }
//  console.log("⭐⭐outside scope⭐⭐")
//     // console.log("f-a:",a) //Uncaught ReferenceError: a is not defined
//     // console.log("f-a:",b) //Uncaught ReferenceError: b is not defined

// // calling the function
// sample()


// REDCLARATION : creating the varaible with same name in same scope

// var a ;
// var a ;
// let b; //ncaught SyntaxError: Identifier 'b' has already been declared
// // let b;//Cannot redeclare block-scoped variable 'b'
// const c=10
// const c=10 //Cannot redeclare block-scoped variable 'c'.

{
// const c=10
}


// REASSIGNMENT 

// var a=10
// console.log(a) // 10
// a=20
// console.log(a) //20

// let ab=10
// ab=20

// const c=1
// c=2




// HOISTING :all declaration are moved to top of there scope 
// declaration : creation  of a varaible  : var a; let b; const c=10
// scope :lifetime of  varaible or function etc (accessibility of varaible )
//  Global scope : var let const  
//  block scope:  let const 
// function scope : var 


// debugger;// stop excution of code 
// var a=10
// let b=40
// const c=30

// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a)
// console.log(b)


// {
//     debugger
// var a=10
// let b=10
// const  c=10
// }

// all varaibles are hoisted to top of there scope but let and const are not initialized with value like var 
// // variables like let and const cont be accessed before its declaration because the variables like let const will be store in tdz untill reaches its declaration 
// debugger
// console.log(a*10)
// var  a=0
// let a=10
// let a=20
// console.log(a)

// console.log(b)
// let b=undefined


// var a;
// var a;
// let b;
// let b;
// const c=10;
// const c=10;

// var a; // undefined
// console.log(c) //refrence error
// let c;
// console.log(c)// undefined
// const d=10


// function data(){ //block scope
//     debugger
//     var a="mobile" //function scoped
//     let b="lp" // block scope
//     const c="AC" //block scope
// }

//  data()


console.log(a)// undefined
var a=10
console.log(a)// 10

console.log(b) //refrence error 
let b=10
b="hii"
const c=10

