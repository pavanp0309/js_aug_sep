// Data : information in the form images text audios videos numbers maps etc 

// DataTypes 

// 1.primitive Datatypes : doesnt have methods (actions )
//    1.Number  2.string 3.boolean  4.null  5.undefined 6.BIgInt 7.symbols 
// 2.Non-primitive Datatypes :have methods (actions ) & propertes
        // 1.Object:{n:10,name:"hello"} 2.arrays 3.function 4.math etc...

// TerMinologies 
// 1.immutable  : values cant be changed 
//     var a="hii"
//     console.log(a[0])
//     a[0]="r"
//     console.log(a)
// // 2.mutable  : values can be changed 
//     var b=["h","i","i"]
//     console.log(b[0])
//     b[0]="r"
//     console.log(b)

//   let n={
//     //  property:value
//     //  key:value
//        name:"raju",
//     //    methods
//        call:function(){
//         alert("hii")
//        }
//     }

    // console.log(n.name)
    // console.log(n.call())


    // typeof operator : used for checking the type of datatype
    // console.log(typeof 10) //number
    // console.log(typeof 10.6) // number
    // console.log(typeof "10") //string
    // console.log(typeof true) // boolean
    // console.log(typeof undefined) //undefined
    // console.log(typeof null) //object
    // console.log(typeof {}) //object
    // console.log(typeof []) //object
    // console.log(typeof function(){}) //function 


//    Taking the values from the Users 
//  let user= prompt("enter the value") // c
//  console.log(user) //45
//  console.log(typeof user)//string


// conversion 
// 1.parseInt()
// 2.parseFloat()
// 3.Number()

// A string to convert into a number.
// Converts a string to an integer.
// let user1= parseInt(prompt("enter the value")) // 45.333
//  console.log(user1)// 45
//  console.log(typeof user1)//number


// let user2= parseFloat(prompt("enter the value")) //45.333
//  console.log(user2) //45.333
//  console.log(typeof user2) //number

// console.log(Number())// 0 
// console.log(Number(10))// 10 
// console.log(Number("10"))// 0 
// console.log(Number("10x"))//NAN (Not A NUMBER) 0-9 (conversion will only takes place for numerical values)
// console.log(Number(null))//0
// console.log(Number(undefined))//NaN
// console.log(Number(true))//1
// console.log(parseInt("10px"))
// console.log(parseInt("y10")) //NaN
// console.log(parseFloat("Y10.5")) //NAN
// console.log(parseFloat("10.5X")) //10.5
// console.log(parseFloat("10.5")) //10.5
// console.log(parseInt("10.5")) //10


// console.log(Math.floor(10.5))//10
// console.log(Math.floor(10.8))//10
// console.log(Math.ceil(10.5))//11
// console.log(Math.ceil(10.2))//11
// console.log(Math.round(10.5))//10
// console.log(Math.round(10.3))//10
// console.log(Math.abs(-10))//10
// console.log(Math.sqrt(16))//4
// console.log(Math.random())//random number(0-0.9999999)
// console.log(Math.random()*10)//random number(0-0.9999999)
// console.log(Math.floor(Math.random()*10))//random number(0-0.9999999)
// let quote=["ravi","raju","manas","chiru"]
// let index=Math.floor(Math.random()*quote.length)
// console.log(quote[index])

// console.log(Math.pow(2,3))


// OPERATORS
// ARTHEMATIC OPERATORS 
// 1 + : ---> Addition operator 
    //  ----> string operator 
    // ----> uniary plus 
// . - , * ,
//    / -- divison opeartor --quotient
//    % --  modulo division opeartor--remainder
// ** exponential operator -- es6 

// Increment operators (++)
    // 1.Pre-increment : increment the value by one before it is printed 
    // 2.Post-increment : increment the value by one after is been used 
// decrement operators (--)
//    1.Pre-decrement : decrement the value by one before it is printed 
    // 2.Post-decrement : decrement the value by one after is been used 

// + 
// console.log(1+1) //2
// console.log(1+"1") //11
// console.log("1"+1) //11
// console.log(3+"1"+1) //311
// console.log(3+1+"1") //41
// console.log(3+ +"1") //4
// console.log(typeof +"1")
// console.log(typeof +true) //number
// console.log(3+"hi")//number

// - 

// console.log(10-1)//9
// console.log(10-"1")//9
// console.log("10"-"1")//9
// console.log("10x"-"1")//nan


// // *
// console.log(10*2)//20
// console.log(10*"2")//20
// console.log("10"*"2")//20
// console.log("10x"*"2")//NaN

// //* ** -exponential value */
// console.log(2**3) // 2*2*2==8
// console.log(3**"5") //3*3*3*3*3=243
// console.log("2"**"3")//8

// / division operator --(Quotient value)
// console.log(10/2)// 5
// // extract the last digit 
// let last=Math.floor(123/10)
// console.log(last)//12
// console.log(Math.floor(last/10))

// % modulo division opeartor ----(Remainder value)
// console.log(10%2) //0
// let lastval=123%10
// console.log(lastval)//3
// console.log(lastval%10)


// caliculate the sum of the digits 
// let n=134 // 1+3+4 ==8
// console.log(134%10) // 4
// let last1=134%10 //4
// console.log(last1)
// let first=Math.floor(134/10)
// console.log(first)//13
// let last2=first%10
// console.log(last2) // 3
// let first1= Math.floor(first/10)
// console.log(first1) // 1

// let result=last1 +last2 +first1
// console.log(result)
// // console.log(134//10)


// Increment operators (++)
    // 1.Pre-increment : increment the value by one before it is printed 
    // 2.Post-increment : increment the value by one after is been used 
// decrement operators (--)
//    1.Pre-decrement : decrement the value by one before it is printed 
    // 2.Post-decrement : decrement the value by one after is been used 


// let n=2
// console.log(++n) //3 pre increment
// console.log(n++) //2 post increment
// console.log(n)//3

// console.log(--n) //2 pre-decrement 
// console.log(n--) //2 post-decrement 
// console.log(n)//1

// console.log(--n)//1
// console.log(--n)//0
// console.log(--n)//0


// let a=3     // 4 3 4
// let b=4    // 3 4 5

// let cal=a + ++a + a-- + --b + ++b - b++ + a++ + a + --b
// //      3 +  4 + 4 + 3 + 4 -4 + 3 + 4+ 4 
// console.log(cal)



// let d=5 
// let e=8 
// let res= d++ - ++d +e++ - ++d/ + --e + e-- +d-- +--d +e++ + ++e
          
// console.log(res)


// let a1=3
// let b1=4
// let c1=6

// // let res=a1+ b1++ + --b1 + a1++ - b1++ - --a1 + ++a1 + b1++ + a1+b1  //26
//         // 3+4+4+3-4-3+4+5+4+6==26

// let res1=a1+b1+c1-++a1+ ++b1 + ++c1 -c1++ - b1++ + a1++ + b1++ - ++a1 + a1*b1-b1++
//        //3+4+6-4+5+7-7-5+4+6-6+6*7-7 //48
//     console.log(res1)



// logical operators 
//  && -- and operator  
//   || -- OR operator   
// ! --- not operator

// console.log(true&&true) //true
// console.log(true&&false) //false
// console.log(true || false) //true
// console.log(!true ) //false
// console.log(!!true ) //true


// comparision operator 
// > ,>= ,< ,<= ,== ,=== ,!= !== 
// let age=18
// let isIndian=false
// console.log(age>=18)// true
// console.log(age<=18)//true
// console.log(age<18)//false
// console.log(age>18)//false
// console.log(age>=18&&isIndian)//false
// console.log(age>=18||isIndian)//false
// console.log(12==12)//true
// console.log(12=="12")// true
// console.log(12=="21")//false
// console.log(12==="12")//false
// console.log(12!=12)//false
// console.log(12!="12")// false
// console.log(12!=="12")//true


// TERNARY OPERATOR (syntatic sugar of if-else condition)
// let selection="firstclass"
// if(selection=="firstclass"){//condition
//    console.log(100)
// }else{
//     console.log(50)
// }


// let res=(condition)?"value if condition is true":"value if condition is false"
// let price=(selection=="firstclass")?console.log(100): console.log(50)

// let age=18
// let amount=600
// let isprime=true
// let avail=(age>=18&&isprime)?(amount>500?"free-delivary":"50rs "):(amount<500?"add items to apply discount&free-delivary":"no-discount")
// console.log(avail)


let a=10

// console.log(a=a+10)
console.log(a+=10)
console.log(a*=10)
console.log(a-=10)
console.log(a/=10)
console.log(a%=10)
console.log(a**=10)