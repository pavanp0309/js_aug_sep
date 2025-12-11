
// // events are nothing but actions either performed by user or browser itself

// // 1.MouseEvents  : onclick ondblclick onmouseover onmouseleave,onmouseEnter
// // 2.keyboardevents : onkeypress onkeyup onkeydown etc.
// // 3.formEvents : onsubmit onchange onfocus etc..

// // BrowserEvents : onscroll onresize onload , ondocumentcontentload 

// // EventHandlers: are js function which excutes the piece of code when a particular event is triggered

// // EventListener :it listens the particular event fired and calls the repsected event handler 


// // different ways to add events to html 
// // 1.adding directly through html attributes  
// // 2.adding through dom attributes 
// // 3.using addeventListner 


// // event handler
function addtocart(){
   alert("added item to cart")
}


// let btnele=document.getElementById("btn")

// // 2method
// btnele.onclick=addtocart
// btnele.onclick=function (){
//     alert("added the value")
// }
// btnele.onmouseenter=function (){
//     alert("added the value on mouse Enter")
// }

// // 3.addeventListner 
// let btnele1=document.getElementById("btn1")
// // btnele1.addEventListener("click",addtocart)
// // btnele1.addEventListener("click",()=>{})
// btnele1.addEventListener("click",function (){
//     alert("added the value ")
// })
// btnele1.addEventListener("click",addtocart)

// eventPropagation 
let parentele=document.querySelector(".parent")
let childele=document.querySelector(".child")
let btnele=document.querySelector(".btn1")
let btnele1=document.querySelector(".btn2")

// parentele.addEventListener("click",(event)=>{
//     // console.log(event.target)
//     console.log(event.stopPropagation())
//     console.log(event.stopImmediatePropagation())
//     console.log("parent is excuted")
// },{capture:true})
parentele.addEventListener("click",(e)=>{
    // e.stopPropagation()
    e.stopImmediatePropagation()
    console.log("parent is excuted")
},true)
parentele.addEventListener("click",(e)=>{
    console.log("parent is excuted")
},true)
childele.addEventListener("click",()=>{
    console.log("child is excuted")
},{capture:true})
btnele.addEventListener("click",()=>{
    console.log("btn is excuted")
})
btnele1.addEventListener("click",()=>{
    console.log("btn-1 is excuted")
})

// parentele.addEventListener("click",(e)=>{
//     console.log(e.target.classList.toggle("c1"))
// })



// let pele=document.querySelector(".parent")
// parentele.addEventListener("click",(e)=>console.log(e.target.value))
