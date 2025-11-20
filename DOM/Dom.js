// Document OBJECT MODEL  (DOM)

// Document : HTML  
// Object :{} //struture
// a programming interface for HTML and XML documents
//  that represents a document as a tree-like structure of objects.

// benifits  

// manipulate the content, structure, and style of a webpage 
// adds interactivity 

// different Ways(methods) to access Html into Javascript
{/* <p id="id1" class="c1"></hellop> */}

// 1.document.getElementById()
// 2.document.getElementByClassName()
// 3.document.getElementsByTagName()
// 4.document.querySelector()
// 5.document.querySelectorAll()


// 1.Id is unique in entire document and 
// these method acceses the only the first element that matches in the document 
// let PriceEle=document.getElementById("price")
// console.log(PriceEle) // <p id="price" >400</p>

// manipulate the content
// PriceEle.innerText="hello"
// PriceEle.textContent="hello"
// PriceEle.innerHTML="hello"
// PriceEle.innerHTML="<span style='color: red;'> 5000</span>"

// console.log(PriceEle.innerText)// it cant access the hidden values
// console.log(PriceEle.textContent)//it will access hiden values
// console.log(PriceEle.innerHTML) // can add styles and add html 


// adding the styles
// PriceEle.style.background="red"
// PriceEle.style.padding="2rem"
// PriceEle.style.textAlign="center"
// PriceEle.style.fontweight="bold"
// PriceEle.style.fontSize="2rem"



// let Titleele=document.getElementsByClassName("card-title")
// console.log(Titleele) ///HTMLCollection(2)

// // adding styles
// // Titleele[0].style.color="red"
// // Titleele[1].style.color="red"

// // loops 
// for(let i=0;i<Titleele.length;i++){
//      Titleele[i].style.color="Green"
//      Titleele[i].style.fontSize="2rem"
//     //  Titleele[i].textContent="hi"

// }



// let Titleele1=document.getElementsByTagName("h3")
// console.log(Titleele1) ///HTMLCollection(2)

// // adding styles
// // Titleele1[0].style.color="red"
// // Titleele1[1].style.color="red"

// // loops 
// for(let i=0;i<Titleele1.length;i++){
//      Titleele1[i].style.color="Green"
//      Titleele1[i].style.fontSize="2rem"
//     //  Titleele[i].textContent="hi"

// }


// querySelector()
// querySelectorAll()

let qele=document.querySelector("#price") // id:#id value class = .classname tagname :h1 p etc
let qele1=document.querySelector(".card-title") // id:#id value class = .classname tagname :h1 p etc
let qele2=document.querySelector("h3") // id:#id value class = .classname tagname :h1 p etc
// console.log(qele)//<p id="price" >400</p>
// console.log(qele1)// <h3 class="card-title">Iphone</h3>
// console.log(qele2)// <h3 class="card-title">Iphone</h3>
        
let qeleall=document.querySelectorAll("#price")
let qeleall1=document.querySelectorAll(".card-title")
let qeleall2=document.querySelectorAll("h3")
let qeleall3=document.querySelectorAll("h3,#guess,#price ,.card-title")
console.log(qeleall)//NodeList(2) [p#price, p#price]
console.log(qeleall1)//NodeList(2) [h3.card-title, h3.card-title]
console.log(qeleall2)//NodeList(2) [h3.card-title, h3.card-title]
console.log(qeleall3)//NodeList(4) [h3.card-title, p#price, h3.card-title, p#price]

// for(let i=0;i<qeleall3.length;i++){
//     qeleall3[i].style.background="orange"
// }

// Map((ele,index,newarr)=>{}) // it returns new array with transformed values
// foreach((ele,index,newarr)=>{}) // it doesnt return new array
let num=[1,2,3,4,5,5]
let res=num.map((ele)=>{
    console.log(ele)
    console.log("m->",ele*2)
    return ele*2
}) // [2, 4, 6, 8, 10, 10]
console.log(res)
let res1=num.forEach((ele)=>{
    console.log(ele)
    console.log("m->",ele*2)
    return ele*2
}) 
console.log(res1) //undefined
qeleall3.forEach(ele=>ele.style.background="orange")