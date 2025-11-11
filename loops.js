// To avoid the repeatation of code ,increase the readability ,maintainability of code 

// UseCase 
// Logins ,captcha ,reels ,api data (products,coins),search etc..

// Types of Loops 
// 1.for_loop :no-of itteration are known previously 
// 2.while_loop :no-of itteration are not known previously (condition based loop)
// 3.do-while_loop :atleast once if we want to excute
// 🎯introduced in es6
// 4.for-in_loop :it used for repeating through the properties of object
// 5.for-of_loop :is used for repeating through innumerable of object like  arrays and string


// syntax :
// let i=0; start point 0 1 2 3  i<=3   no-itteration -4
// let i=1; start point 1 2 3  i<=3   no-itteration -3
//  condition :i<=3
// increment:i++
// for(initialization;condition;increment/decrement){

// }

// natural Numbers 1,10
// start point :1==> i=1
// end point :10 ==> i<=10
// increment : i++ 
// for(let i=1;i<=10;i++){
//     console.log("i",i)
// }

// reverse order   
// sp :10 
// endpoint:i>=1 ;
// i--

// for(let i=10;i>=1;i--){
//     console.log("i",i)
// }

// let arr=[1,2,3,4,5,6,7,8,9,10]
//      //  0 1 2 3 4 5 6 7 8 9
// // // start point 0
// // endpoint :arr.length 

// for(let i=0;i<=arr.length-1;i++){
//     console.log("i",i)
//     console.log("val:",arr[i])
// }

// for(let i=arr.length-1;i>=0;i--){
//     console.log("i",i)
//     console.log("val:",arr[i])
// }


// let str="hello" 
//     // 0:h 1:e 2 :l 3:l 4:0
// for(let i=0;i<=str.length-1;i++){
//     console.log(str[i])
// } 

// // write a program a to print the sum of even natural number in given range 1-20
// // //  let a variable sum =0
// //     // logic  
// //        decide the start point and endpoint 
// //        and repeate the loop for the start point i=0 
// //        check the codition i%2==0 weather number is even or not 
// //        print the sum 

// function sumofeven(start,end){
//     let sum=0
// for (let i=start;i<=end;i++){
//     if(i%2==0){
//         console.log("i",i)
//         sum+=i // sum=0 sum=0+2
//     }
// }
// console.log(sum)
// }
// // sumofeven(1,100)

// // write a program to print the sum of odd numbers in a given array 
// let arr1=[1,3,4,5,6,7,8,9]
// function sumofOdd(start,end){
//     let sum=0
//     for(let i=start;i<=end-1;i++){
//         if(arr1[i]%2!==0){
//             console.log("i",arr1[i])
//             sum+=arr1[i]
//         }
//     }
//     console.log(sum)
// }

// sumofOdd(0,arr1.length)

// // syntax:
// let i=0 // intializtion
// while(condition){
// //   increment /decrement
// i++
// }

// // syntax: do-while
// initialaztion
// do{
// //  increment /decrement 
// }while(condition)


// // for in --> objects
// for(let key in varname){
// //   print the output
// }
// // for of ---> arrays,strings
// for(let val of  varname){
//     //print the output
// }

// let uname="p"
// let m="mobile_2"

// // for in loop
// let data={
//    [uname]:"raju", // ["uname"]:"raju"
//     age:24,
//     [m]:39999,
//     address:"hybd"
// }
// // accessing object values
// console.log(data)
// console.log(data.uname)
// // console.log(data['age'])//static way of accessing
// // console.log(data[uname])//data['p'] // dynamic way of accessing

// console.log(data.mobile_1)
// console.log(data[m])


// let user={
//     name:"raju",
//     age:20,
//     details:"hybd",
//     degree:true
// }
// for(let key in user){
//     console.log(user[key])
// }

// let product={
//     name:"iphone",
//     price:80000,
//     Ram:"2gb",
//     Rom:"4gb",
//     Hdcalling:"true",
//     batery:5000
// }

// // Template literals  ``
// let d="hello's" 
// let d1='hello"s'
// let d2='hello"s'
// let ad=d1+"these is u"+d2
// let ad1=`hello's "hhii" ""lhgfghjk"`
// // multi line string is also possible
// let ad2=`hello's 
// "hhii"
//  ""lhgfghjk"`
//  let ad3=`${d1} lkjhgfdfghjkl;lkjhg ${d2}`



// // name : value 
// // for(let key in product){
// //     console.log(key + ":" + product[key])// without template literals
// //     console.log(`${key}:${product[key]}`)//with template literals 
// // }
// // for(let val of product){ //type object are not itterable
// //  console.log(val)
// // }

// let product1={
//     name:"iphone",
//     price:80000,
//     Ram:"2gb",
//     Rom:"4gb",
//     Hdcalling:"true",
//     batery:5000
// }

// // // to access only keys
// // Object.keys(variblename)
// // // to access only value
// // Object.values(variblename)
// // // to access keys and values
// // Object.entries(variblename)
// // let v1=Object.entries(product1)
// // // console.log(v1)


// let arr=[1,2,3,4,5,6,7]
// let str="hello" //{h:0 e:0 l:2 0:0}
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }
// // for(let i=0;i<str.length;i++){
// //     console.log(str[i])
// // }

// // for(let val of arr){
// //     console.log(val)
// // }
// // for(let val of str){
// //     console.log(val)
// // }

// // let rep={}
// // for(let val of str){
// //    console.log({[val]:rep[val]+1})
// // }


// // // syntax:
// // let i=0 // intializtion
// // while(condition){
// // //   increment /decrement
// // i++
// // }



// // password checker 
// // intilazation
// let attempts=3
// let username=prompt("enter a username")
// let password=prompt("enter a password")

// // while loop is condition based loop 
// debugger
// while(attempts>0 && username!=="raju" && password!=="raju123"){
//     console.log("invalid username and password ","attempts",attempts-1)
//     // decrement
//     attempts--
//     if(attempts==1){
//         username="raju";
//         password="raju123"
//     }

//     if(username=="raju"&&password=="raju123"){
//         console.log("login is successfull")
//     }else{
//         console.log("account as blocked for 24hrs")
//     }

// }





// basic counter 
// let i=1 //initialization 
// while(i<=8){//condition
//     console.log("count",i)
//     i++ // increement
// }

// let a=8 //initialization 
// while(a>0){//condition
//     console.log("count",a)
//     a-- // increement
// }

// write a program to calculate the sum of the digits
// 123 
// % --remainder
// /-quotient
// console.log(123%10)//
// console.log(Math.floor(123/10))//



// function sumofdigits(num){
// let sum=0 // 
// while(num>0){
//     ldigit=num%10 // 3 2 1
//     sum+=ldigit // 0+3=3 3+2 =5 5+1==6  
//     num=Math.floor(num/10); // --123-12-1-
// }

// console.log(sum)
// }
// sumofdigits(145)
// sumofdigits(123)
// sumofdigits(12376254567898)


// write a program to count the number of digits in agiven number 
// 1.  156 ---o/p-3
// 2.  18790---o/p--5
// function countNoofdigits(num){
//     let count=0
//     while(num>0){
//         // let lastdigit=num%10
//         count++
//         num=Math.floor(num/10)
//     }

//     console.log(count)

// }

// countNoofdigits(156)

// palindrom :
// 121
// -121 ==>121-

// function ReverseaNumber(num){
//     let reverse=0
//     let temp=num;//preserving the original value passed 
//     while(num>0){
//         let ldigit=num%10;// 121%10 ==>1(remainder) 12%10==> 2(remainder) 1
//         reverse=reverse*10+ldigit // 0*10+1==> reverse=1  1*10+2=12 reverse=12  12*10+1==121
//         num=Math.floor(num/10) //121 ==>12 ==>12==>1
//     }
//  console.log(reverse)
//  console.log(num)
//  console.log(temp)
//  let res=(temp===reverse)?"palindrom":"not a palindrom"
//  console.log(res)
// }
// ReverseaNumber(121)
// ReverseaNumber(123)


// while(condition){// if these condition is true it excutes the block of code

// }
// initialization
// let i=0;
// do{
//     // print statements 
// //  incremnt /decrement
// }while(condition) // will run atleast once even if condition is false


// let i=6
// do{
//   console.log("i value",i)
//     // increment the value 
//     i++
// }while(i<=5)
// 5!=5*4*3*2*1

// debugger;
// let num=5
// let fact=1;
// do{
//  fact*=num;
//  num--
// }while(num>0) // 
