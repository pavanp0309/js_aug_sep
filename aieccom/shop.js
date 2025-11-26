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
let cartItems=[]

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
}


// function to show the cart icon total
function cartIconTotal(){
    
}

// function to load the cartitems
function loadCartItems(){
    
}