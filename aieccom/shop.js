// load all the entire content in to js to apply the functionalities

document.addEventListener("DOMContentLoaded",()=>{
    
    //1.🚩 loading all the button to apply the functionalities and accessing it
    let addbtn=document.querySelectorAll(".cart-btn")
    console.log("c-btns",addbtn)// nodelist of array values []

    // printing /accessing the btns indivually
    addbtn.forEach((cbtn)=>{
    //    🔨🔨applying event to single button that are looped here
        cbtn.addEventListener("click",(e)=>{
        //  console.log(e.target.parentElement.parentElement)//
         let product=e.target.parentElement.parentElement
        //  🧍‍♂️🧍‍♂️accessing the required data from product
        let imgEle=product.querySelector(".product-img").src
        let titleEle=product.querySelector(".product-title").innerText
        let priceEle=product.querySelector(".product-price").innerText
        let descEle=product.querySelector(".product-description").innerText
  
        // grouping all the Items to object format
        let selectedProd={
            img:imgEle,
            title:titleEle,
            price:parseFloat(priceEle.replace(/[^\d]/g,"")),
            description:descEle,
            qunatity:1
        }
        addtocart(selectedProd)

        })
    })


})

// varible to store cart items 
let cartItems=[{img: 'http://127.0.0.1:5500/assets/t1.jpg', title: 'gamma', price: 100, description: 'Some quick example text to bu content.', qunatity: 1},{img: 'http://127.0.0.1:5500/assets/t1.jpg', title: 'gamma', price: 100, description: 'Some quick example text to bu content.', qunatity: 3}]

// 🚚🚒function to add items to cart 
function addtocart(product){
    
 console.log(product)
 let existingItem=cartItems.find(ele=>ele.title === product.title)

    // these function checks weather a  item is already existing or not it it exists in the cart its going to increment value esle adds one items
 if(existingItem){
    existingItem.qunatity++
 }else{
    cartItems.push(product)
 }
 localStorage.setItem("cart",JSON.stringify(cartItems))
 cartIconTotal()
}


// function to show the cart icon total
function cartIconTotal(){
    // 🚨accessing the Carticon value
    let cartIcon=document.querySelector(".cart-icon-val");
    //🔥🔱 calculating the Total items in cart
    let cartTotal=cartItems.reduce((acc,ele)=>{
    console.log("acc",acc)
    console.log(ele.qunatity)
    return acc +ele.qunatity
},0)
// 🔥🔱updating the carticon
cartIcon.innerText=cartTotal

}

// function to load the cartitems
function loadCartItems(){
    let data=localStorage.getItem("cart")
    // checking the items exist or not
    if(data){
        cartItems=JSON.parse(data)
        console.log(cartItems)
        cartIconTotal()
    }
    
}
loadCartItems()


// BOM (BROWSER OBJECT MODEL)
// localStorage : stores the data permeantaly evnen we close the tab  and max data it can store is 5m-10mb
// sessionStorage : used to store the data temporaly it looses the tab as soon we change the tab or close the tab  max data it can store is 5m-10mb

// C : localStorage.setItem(key ,value) || sessionStorage.setItem(key,value)
// R : localStorage.getItem(key) || sessionStorage.getItem(key)
// U : localStorage.setItem(key ,value) || sessionStorage.setItem(key,value)
// D : localStorage.removeItem(key) || localStorage.clear() ||sessionStorage.removeItem(key) || sessionStorage.clear()

// localStorage.setItem("name","raju")
// localStorage.setItem("age",30)
// localStorage.setItem("name1",true)
// localStorage.setItem("name1","ramu")
// // localStorage.removeItem("name1")
// // localStorage.removeItem("age")
// // localStorage.clear()


// sessionStorage.setItem("name","raju")
// sessionStorage.setItem("age",30)
// sessionStorage.setItem("name1",true)
// // localStorage.setItem("name1","ramu")
// // sessionStorage.removeItem("name1")
// // sessionStorage.removeItem("age")
// // sessionStorage.clear()

// localStorage.setItem("cartItems",JSON.stringify({img:"image.com",title:"chatgpt",price:20,des:"kjhhjk"}))
// let data=JSON.parse(localStorage.getItem("cartItems"))
// console.log(data.title)