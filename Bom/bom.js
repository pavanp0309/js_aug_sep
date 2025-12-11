// // BOM :BROWSER OBJECT MODEL

// // OBJECT : a real world entity which consits of key and value pairs
// // {
// //     name:"raju",
// //     location:"hyderabad",// property
// //     alert:function(){} // method
// // }

// // Methods :
// // alert() confirm() prompt() setTimeout() setInterval() clearTimeout() clearInterval() open() close()

// // Properties :
// // localStorage sessionStorage ,location ,history naviagtor  ,screen cookies etc..

// // alert("welocome user")
// // to take the iNput from users
// // let a=prompt("enter a value") // takes the value in string format
// // console.log(a)

// // let c=confirm("Are you a robot")
// // if(c){
// //     alert("not allowed to use these site")
// // }else{
// //      alert("welcome to use these site")
// // }

// // console.log("hi")
// // let id=setInterval(()=>{
// //     console.log("hi-1")
// // },1000)
// // // clearInterval(id)
// // console.log("hi-2")

// // if(location.protocol="http:"){
// //     confirm("site not secure do u wnat to allow")
// // }

// function GoHome() {
//   // location.href='https://www.amazon.in/'
//   // location.assign("https://www.amazon.in/")
//   location.replace("https://www.amazon.in/");
// }

// Navigator

let menu = "pan";

switch (menu) {
  case "updates":
    alert("groups")
    break;
  case "calls":
      alert("groups")
    break;
  case "communities":
      alert("groups")
    break;
  case "chats":
    break;
  case "settings":
    break;
  default:
    break;
}
// let arr=[1,3]
// for(let i=0;i<arr.length;i++){
//   console.log([i])
// }
// for(let a of arr ){
//     console.log("a",a)
// }
// let data={
//     name:"raju"
// }
// console.log(data.name)
// for(let a in data ){
//     console.log("a",data[a])
// }


let Raju=(n=10,n1,...r)=>{//[parameter]
 
   
    return [n*2,n1,...r]

}

let res=Raju(10,3,5,5)//actual value
console.log(res)


let a1=[1,3,4]
const a2=[...a1,3,...a1]
console.log(a2)
const [a,m,]=a1
console.log(a)