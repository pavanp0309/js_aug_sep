// const name="fulln"
// const data={[name]:"raju",age:24,location:{pincode:500072,place:"hybd"}}

// // console.log(data.name) //static way of accessing the value
// // console.log(data.location.pincode)
// // console.log(data[name])//dynamic accessing of values


// // const {fulln,age:a=0,location:{...r}}=data
// // console.log(fulln,a,r)


// // function User(p){
    
// // //     const {fulln,age,location}=p
// // // console.log(fulln,age,location)
// // }
// // User(data)

// // function User({fulln,age,location}){
    
// // //     const {fulln,age,location}=p
// // console.log(fulln,age,location)
// // }
// // User(data)

// 
// const data1=[1,3,4,5,6]
// const [a,,d]=data1
// console.log(a,d)

console.log("hi")
console.log("1")
try {
   let data=false
   if(data){
    console.log("hii")
   }else{
    throw new Error("no user");
    
   }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
   
}
console.log("2")
console.log("2")
console.log("2")
console.log("2")
console.log("2")

