
// conditional used for controlling the flow of excution of code based on the codition is true or false
// different types of conditional statements  

// 1.simple If 
// 2.nested -if (if-inside if )
// 3.else-if : ternary operator (es6)
// 4.else-if-ladder 
// 5.switch-cases 


// 1.simple If  syntax 
// if(condition){
// //    if condition is true these block of code excutes
// }


// let isLoggedin=true
// if(isLoggedin){
//     console.log("welcome User")
// }


// else-if 
// if(condition ){
//     // these will excute if condition is true
// }else{
//     these block will excute if codition is false 
// }

// example 
// debugger
// if(isLoggedin){
//     console.log("welcome User")
// }else{
//     console.log("login")
// }


let age=23
let isIndian=true
// console.log( !!undefined)
if(age>=18&&isIndian){
    console.log("eligible for vote")
}else{
    console.log("not eligible for voting")
}

if(age>=18){
  console.log("eligible for driving lience..")
}else{
     console.log("need to turn 18.")
}


function instaLogin(username,password){
   if(username=="raju"&&password==1234){
    console.log("welcome user")
   }else{
       console.log("invlaid creditional")
   }
}

instaLogin("raju","1234")
instaLogin("raju1",1234)

// functions 

// function ageCal(age,isIndian){// formal paramters/argument ,params 
//     console.log("heloo",age,isIndian)
//     if(age>=18&&isIndian){
//     console.log("eligible for vote")
// }else{
//     console.log("not eligible for voting")
// }

// }

// function call 
// ageCal(25,true)// actual arguments 
// ageCal(35,false)// actual arguments 
// ageCal(55,true)// actual arguments 
// ageCal(15,false)// actual arguments 
// ageCal(65)// actual arguments 


let marks=45
let grade; // undefined

if(marks>=90){
    grade="A"
}else if(marks>=70&&marks<90){
    grade="B"
}else if(marks>=50&&marks<70){
 grade="C"
}else if(marks>=35&&marks<50){
     grade="D"
}else if(marks>=25&& marks<35){
     grade="E"
}else{
    grade="fail"
}


console.log(grade)


function GradeCal(marks){
    let grade;
if(marks>=90){
    grade="A"
}else if(marks>=70&&marks<90){
    grade="B"
}else if(marks>=50&&marks<70){
 grade="C"
}else if(marks>=35&&marks<50){
     grade="D"
}else if(marks>=25&& marks<35){
     grade="E"
}else{
    grade="fail"
}
console.log(grade)
}

 GradeCal(25)
 GradeCal(35)


 function caliculate(op,v1,v2){
    let result=0
    // logic 
    if(op=="+"){
        result=v1+v2
    }else if(op=="-"){
        result=v1-v2
    }else if(op=="*"){
        result=v1*v2
    }else if(op=="/"){
        result=v1/v2
    }else if(op=="%"){
        result=v1%v2
    }else if(op=="**"){
        result=v1**v2
    }else{
        result="invalid operator"
    }



    console.log(result)

 }

 caliculate("+",10,3)
 caliculate("-",10,3)
 caliculate("*",10,3)