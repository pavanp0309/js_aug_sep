// it can be single character or word or sentance or pragraph which is tored inside a single quotes or double Quotes we call it has strings

// 1.Different way to create the strings  
// 1.using the String literals 
//     // 1.using single quotes
//     // 2.using Double/triple quotes
//     // 3.using template literal backticks (``)
// 2.using the string Global kewword
// // 2.using the new Keyword 

// Primitive : Lowest level of langague implementation  where dont have any methods
//    Mutable : we can the values or characters at runtime (objects ,arrays)
//    IMMutable :we cant change the value or characters created at runtime(strings )


// In js everything is Object Under the Hood 
// in Js Strings are converted into object under the Hood so all the methods and properties that are availble on string object is also available on strings

// let str={
//     name:"uppercase" ,// property:val,
//     Uppercase:function(){} // method
// }

// 1.using string literal method 
// let data="The Brown Fox in Garden"
// let data1='The Brown Fox in Garden'
// let data2=`The Brown Fox in Garden`
// console.log(typeof data)
// console.log(typeof data1)
// console.log(typeof data2)

// the Problems
// let data3="The Brown" Fox in Garden"// multiple strings are now allowed
// let data4="The Brown Fox's 
// in Garden"// multiple strings are now allowed // multi line strings are now allowed 

// let res="There is a " + data + " " +"run" 
// console.log(res)

// let sample="hii\n ravi"
// console.log(sample)

// // sol
// let res1=`There is a 

// "Fox's" 's  
// in the garden ${data}`
// console.log(res1)

// CRUD : CREATE READ UPDATE DELETE

// READ 
// console.log(data)
// console.log(data[0])//T first character
// console.log(data[data.length-1])//n: first character

// // Update strings are immutable by default 
// // immutable
// data[0]="P"
// console.log(data)

// // mutable
// const da=[1,3,5]
// da[0]="P"
// console.log(da)

// let dat="The Brown Fox in Garden"
// console.log(dat[10]) // F
// console.log(dat[11]) // F
// console.log(dat[12]) // F


// let m=" The Crow "
// console.log(m)
// console.log(m.length)//10

// // To REMOVE WHITE SPACE FORM START or End We use the following 
// // 1.trimStart() // removes white space from starting
// // 1.trimEnd() // removes white space from ending
// // 1.trim() // removes white space from  start and end

// let r=m.trimStart()
// let r1=m.trimEnd()
// let r2=m.trim()
// console.log(r.length)//9
// console.log(r1.length)//9
// console.log(r2.length)//8


// PADSTART, PADEND 
// padStart(maxLength: number, fillString?: string): string
// let AccNo="1235"
// console.log(AccNo.padStart("16","*"))//************1235
// console.log(AccNo.padStart("4","*"))//1235
// console.log(AccNo.padStart("6","*"))//**1235
// console.log(AccNo.padEnd("6","*"))//1235**

// toUpperCase()
// toLowerCase()

// console.log("HII".toLowerCase())
// console.log("hii".toUpperCase())
// let website="http://www.amazon.in/deals"
// console.log(website.includes("https"))
// if(website.includes("http")){
//     alert("site not secure")
// }


// slice(startindex,endindex)
// let str="hii everyone"
//  //      0:h 1:i 2:i 3: 4:e 5:v 6:e 7:r 8:y9:0 10:n 11:e
//  console.log(str.length)
// console.log(str.slice())// hii everyone (Extractes from zero to last)
// console.log(str.slice(2))// i everyone (extractes from start to endindex)
// // console.log(str.slice(2,3))// i (Extracts from start to previous of last index)
// // console.log(str.slice(-2))// 12(length)+(-2)(startindex) ==10
// // console.log(str.slice(-2,-1))// 12(length)+(-2)(startindex) ==10 ne
// // console.log(str.slice(6,3))// empty


// console.log(str.substring())// hii everyone (Extractes from zero to last)
// console.log(str.substring(2))// i everyone (extractes from start to endindex)
// console.log(str.substring(2,3))// i (Extracts from start to previous of last index)
// console.log(str.substring(-2))// -ve index are treated as zero
// console.log(str.substring(6,3))// start>end==swaps the values


// Split(): 
let sp=" The  Brown fox in\n the  Garden "
// console.log(sp)
// console.log(sp.length)
let sp1=new String("The Brown fox in the Garden is setting inside the cage")
// console.log(sp1)
// console.log(sp1.length)
// target  word ="the" //[17] [17,46]
// console.log(sp.split())//['The Brown fox in the Garden']
// console.log(sp.split(""))// ['T', 'h', 'e', ' ', 'B', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'G', 'a', 'r', 'd', 'e', 'n']
// console.log(sp.split(" "))// ['T', 'h', 'e', ' ', 'B', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'G', 'a', 'r', 'd', 'e', 'n']
// console.log(sp.split(/\s+/))// ['T', 'h', 'e', ' ', 'B', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'G', 'a', 'r', 'd', 'e', 'n']


// function FindIndex(str,target){
//     console.log(str)
//     let indexs=[] //
//     let newarr=str.trim().split(/\s+/)//
//     console.log(newarr)
//     for(let i=0;i<=newarr.length-1;i++){//
//         console.log(newarr[i])
//         if(target==newarr[i]){//
//             indexs.push(i) //push only the index value
//         }
//     }
//     return indexs

// }
// let res=FindIndex(sp,"the")
// let res1=FindIndex(sp1,"the")
// console.log(res)
// console.log(res1)


let r1="the Boss is always the boss"
let r2="the boss as come to the office in the morning"
// 1.find the Indexes of the target word with smae logic for both ,target="boss"
function FindexTarget(str,target){
    let indexes=[] // empty array to store the targeted indexs
    let newstr=str.toLowerCase().split(/\s+/) //converting string to array of substrings 

    // looping the array to find the target word 
    for(let i=0;i<=newstr.length-1;i++){
        if(target==newstr[i]){
            indexes.push(i)
        }
    }

    return indexes

}

let result=FindexTarget(r1,"boss")
console.log(result)
// 2.write a program that  counts the no of time the word repated give target word="the"


// object creation
let name="uname"
// feq
let feq={
    user:1 ,//  static property
    [name]:"raju" //dynamic property
}
console.log(feq)
// accessing the values static values
console.log(feq.user)
console.log(feq["user"])
// accessing the values dynamic values
console.log(feq[name])

let age="userage"
let val=10
// updating or adding a prop 
feq[age]=(feq[val]||0)
console.log(feq)


function repeateCount(str){
    let freq={}
    let newstr=str.toLowerCase().split(/\s+/)
  for(let val of newstr){
    console.log(val)
    freq[val]=(freq[val]||0)+1
  }
  return freq
}

let res=repeateCount(r1)
console.log(res)