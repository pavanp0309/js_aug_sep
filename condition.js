
// // conditional used for controlling the flow of excution of code based on the codition is true or false
// // different types of conditional statements  

// // 1.simple If 
// // 2.nested -if (if-inside if )
// // 3.else-if : ternary operator (es6)
// // 4.else-if-ladder 
// // 5.switch-cases 


// // 1.simple If  syntax 
// // if(condition){
// // //    if condition is true these block of code excutes
// // }


// // let isLoggedin=true
// // if(isLoggedin){
// //     console.log("welcome User")
// // }


// // else-if 
// // if(condition ){
// //     // these will excute if condition is true
// // }else{
// //     these block will excute if codition is false 
// // }

// // example 
// // debugger
// // if(isLoggedin){
// //     console.log("welcome User")
// // }else{
// //     console.log("login")
// // }


// let age=23
// let isIndian=true
// // console.log( !!undefined)
// if(age>=18&&isIndian){
//     console.log("eligible for vote")
// }else{
//     console.log("not eligible for voting")
// }

// if(age>=18){
//   console.log("eligible for driving lience..")
// }else{
//      console.log("need to turn 18.")
// }


// function instaLogin(username,password){
//    if(username=="raju"&&password==1234){
//     console.log("welcome user")
//    }else{
//        console.log("invlaid creditional")
//    }
// }

// instaLogin("raju","1234")
// instaLogin("raju1",1234)

// // functions 

// // function ageCal(age,isIndian){// formal paramters/argument ,params 
// //     console.log("heloo",age,isIndian)
// //     if(age>=18&&isIndian){
// //     console.log("eligible for vote")
// // }else{
// //     console.log("not eligible for voting")
// // }

// // }

// // function call 
// // ageCal(25,true)// actual arguments 
// // ageCal(35,false)// actual arguments 
// // ageCal(55,true)// actual arguments 
// // ageCal(15,false)// actual arguments 
// // ageCal(65)// actual arguments 


// let marks=45
// let grade; // undefined

// if(marks>=90){
//     grade="A"
// }else if(marks>=70&&marks<90){
//     grade="B"
// }else if(marks>=50&&marks<70){
//  grade="C"
// }else if(marks>=35&&marks<50){
//      grade="D"
// }else if(marks>=25&& marks<35){
//      grade="E"
// }else{
//     grade="fail"
// }


// console.log(grade)


// function GradeCal(marks){
//     let grade;
// if(marks>=90){
//     grade="A"
// }else if(marks>=70&&marks<90){
//     grade="B"
// }else if(marks>=50&&marks<70){
//  grade="C"
// }else if(marks>=35&&marks<50){
//      grade="D"
// }else if(marks>=25&& marks<35){
//      grade="E"
// }else{
//     grade="fail"
// }
// console.log(grade)
// }

//  GradeCal(25)
//  GradeCal(35)


//  function caliculate(op,v1,v2){
//     let result=0
//     // logic 
//     if(op=="+"){
//         result=v1+v2
//     }else if(op=="-"){
//         result=v1-v2
//     }else if(op=="*"){
//         result=v1*v2
//     }else if(op=="/"){
//         result=v1/v2
//     }else if(op=="%"){
//         result=v1%v2
//     }else if(op=="**"){
//         result=v1**v2
//     }else{
//         result="invalid operator"
//     }



//     console.log(result)

//  }

//  caliculate("+",10,3)
//  caliculate("-",10,3)
//  caliculate("*",10,3)




// write a function to check given number is positive or negative 
// function checkNumber(num){
//   // conditions
// if(num>0){
//    alert("positive value")
// }else{
//     alert("negative number")
// }

// }
// let numb=parseInt(prompt("enter a number"))
// // calling the function
// checkNumber(numb)

// write a function to check weather it is an equilateral isosceles or  sclane trainangle
// eq ==3 sidees equal 
// isosceles =any 2sides  
// scalene ==1side 
function checkTriangle(a,b,c){
    // condition
    if(a==b&&b==c&&a==c){
        console.log("equilateral")
    }else if(a==b&&b==c||a==c){
          console.log("isosceles")
    }else{
        console.log("sclane")
    }

}

checkTriangle(2,2,2)
checkTriangle(2,4,2)
checkTriangle(1,4,2)

// write a function to check given number is positive negative zero 
// function CheckPositiveornot(num){
//   if(num>0){
//      console.log("num is positive")
//   }else if(num==0){
//     console.log("num is zero")
//   }else{
//     console.log("num is negative")
//   }
// }

// CheckPositiveornot()


// write a program to stimulate the atm withdraw 
// let balance=50000
// let withdraw=parseInt(prompt("enter a withdraw amount"))
// let charge=1

// let totalamount=withdraw+charge 

// if(totalamount<=balance){
//     console.log("transaction is successfull")
//     console.log("withdraw amount:",withdraw)
//     console.log("charges:",charge)
//     console.log("total:",balance-totalamount)
// }else{
//     console.log("insufficient balance")
// }

// write a program to check weather the person is eligible for loan or not 
//  salary should be 30000 or more  and credit score should above 700
// let salary=400000
// let creditscore=800
// if(salary>=30000&&creditscore>700){
//    console.log("eligible for loan")
// }else{
//     console.log("not eligible for loan")
// }

// wite a javascript Progrm to stimualte the eccomorce checkout flow 

// prime || new user  || guest
let userType="prime"
let camount=2000
let paymentType="COD" //UPI COD CARD
let delivaryCharge=0

if(userType==="prime"){
    if(camount>=2000){
        delivaryCharge=0
        console.log("free delivary ✈")
    }else{
        if(paymentType=="COD"){
            delivaryCharge=50
            console.log("delivary charges applied 50")
        }else{
          delivaryCharge=30
            console.log("delivary charges applied 30")

        }
    }

}else if(userType==="newuser"){

    if(camount>=1000){
        let discount=camount*0.1
        console.log("discount is available",discount)
    }else{
        console.log("add few more items to get discount")
    }

}else{
      if(camount>500){
        console.log("free-delivary is available")
      }else{
        delivaryCharge=100
        console.log("no-free delivary available")
      }
}

// write a  program to stimualate cupon based  discount for buying electronics 
// write a program to stimualte insurance calculation based user age and amount 
// write a program to stimuate car price based on no-hours booked and travel distance 
