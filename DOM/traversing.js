
// let btnele=document.querySelector(".addto-cart-btn")
// console.log(btnele)
let parentELe=document.querySelector(".card")
console.log(parentELe)

// acccess parentlement /nodes
// console.log(btnele.parentElement)//card
// console.log(btnele.parentElement.parentElement)//body
// console.log(btnele.parentElement.parentElement.parentElement)//html
// console.log(btnele.parentElement.parentElement.parentElement.parentElement)//null
// console.log(btnele.parentNode.parentNode.parentNode.parentNode)//document

// child
// console.log(parentELe.children)//HTMLCollection(4) [img, h3.card-title, p.card-price, button.addto-cart-btn]
// console.log(parentELe.children[2])//HTMLCollection(4) [img, h3.card-title, p.card-price, button.addto-cart-btn]
// console.log(parentELe.childNodes)//NodeList(11) [text, comment, text, img, text, h3.card-title, text, p.card-price, text, button.addto-cart-btn, text]
// console.log(parentELe.firstChild)//text
// console.log(parentELe.firstElementChild)//img
// console.log(parentELe.lastChild)//text
// console.log(parentELe.lastElementChild)//btn

// sibilings
// console.log(parentELe.previousElementSibling)//p
// console.log(parentELe.previousSibling)//text
// console.log(parentELe.nextElementSibling)//p
// console.log(parentELe.nextSibling)//text

// Task 
// function ChangeIt(){
//     console.log(parentELe.parentNode.parentNode.parentNode.parentNode.previousElementSibling.lastElementChild.innerText="Hii dude")
// }


// Dom Manipulation
// let h1ele=document.createElement('h1')
// let TextELe=document.createTextNode("hii")
// console.log(h1ele)
// console.log(TextELe)

// // adding created ELement to the html
// h1ele.appendChild(TextELe)
// document.body.appendChild(h1ele)

// // adding the Attrinutes 
// h1ele.setAttribute("id","id1")
// h1ele.setAttribute("data-id","id1")
// h1ele.className="c1"

// h1ele.classList.add("c2")
// h1ele.classList.remove("c2")
// h1ele.classList.toggle("c2")
// h1ele.classList.toggle("c2")

// // to check attributes 
// console.log(h1ele.hasAttribute("id"))//true
// console.log(h1ele.hasAttribute("src"))//false
// console.log(h1ele.getAttribute("id"))//false
// console.log(h1ele.removeAttribute("id"))//false

let divele=document.createElement("div")
let imgele=document.createElement("img")
let titleEle=document.createElement("h3")
let desEle=document.createElement("p")
let btnEle=document.createElement("button")
console.log(divele,imgele,titleEle,desEle,btnEle)

divele.appendChild(imgele)
divele.appendChild(titleEle)
divele.appendChild(desEle)
divele.appendChild(btnEle)

// adding attributes to images
imgele.setAttribute("src","www.something.com")
imgele.setAttribute("alt","non-img")
titleEle.className="card-title"
desEle.className="card-des"
btnEle.className="card-btn"

// adding the content 
titleEle.innerText="Iphone 16"
desEle.textContent="th best phone"
btnEle.innerText="addtocart"

document.body.appendChild(divele)