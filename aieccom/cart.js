
document.addEventListener("DOMContentLoaded",()=>{
    loadCartItems()
})

let cartItems=[]
// function to load the cartitems
console.log(cartItems)
function loadCartItems(){
    let data=localStorage.getItem("cart")
    
    // checking the items exist or not
    if(data){
        cartItems=JSON.parse(data)
        console.log(cartItems)
      
        
        updateCartUi()
    }
}



// function to UpdateCartUi 
function updateCartUi(){
    const cart=document.querySelector(".cart")
    cart.innerHTML=""

    // looping all the Items added to cart 
    cartItems.forEach((ele)=>{
        // creating the Div section to add the Row
       let divEle=document.createElement("div")
       divEle.className="col-sm-12 col-md-3 col-lg-3" 
       divEle.innerHTML=`<div class="card product" >
                        <img src=${ele.img} class="card-img-top product-img" alt="...">
                        <div class="card-body product-info">
                            <h5 class="card-title product-title">${ele.title}</h5>
                            <p class="card-text product-description">${ele.description}</p>
                            <p class="card-text product-price">${ele.price}</p>
                            <div class="quantity-container ">
                              <button class="btn btn-success increment">+</button>
                              <span class="quantity">${ele.qunatity}</span>
                              <button class="btn btn-danger decrement">-</button>
                              <button class="btn btn-outline-danger ms-2 delete-btn">delete</button>
                            </div>
                        </div>
            </div>`

            // adding the functionalities to increment decrement and delete 
            let qunatitycon=divEle.querySelector(".quantity-container")
            let qunatityval=qunatitycon.querySelector(".quantity")
            let incBtn=qunatitycon.querySelector(".increment")
            let decBtn=qunatitycon.querySelector(".decrement")
            let deleteBtn=qunatitycon.querySelector(".delete-btn")


            // adding functionalities to it
            incBtn.addEventListener("click",()=>{
                // calling the handleIncrement function and passing arguments
                handleIncrement(ele,qunatityval)
            })

            decBtn.addEventListener("click",()=>{
                // calling the handleIncrement function and passing arguments
                handleDecrement(ele,qunatityval)
            })
            deleteBtn.addEventListener("click",()=>{
                // calling the handleIncrement function and passing arguments
                handledelete(ele)
            })

    //    appending the child element
    cart.appendChild(divEle)
    })

}
// function to handleIncrement
function handleIncrement(ele,q){
    ele.qunatity++
    q.textContent=ele.qunatity
    localStorage.setItem("cart",JSON.stringify(cartItems))
}
// function to handledecrement
function handleDecrement(ele,q){
    if(ele.qunatity>1){
        ele.qunatity--
    q.textContent=ele.qunatity
    localStorage.setItem("cart",JSON.stringify(cartItems))
    }
}
// function to handledelete
function handledelete(ele){
    cartItems=cartItems.filter(el=>el.title!==ele.title)
    localStorage.setItem("cart",JSON.stringify(cartItems))
   updateCartUi()
}
// function to handledelelteall
function handleDelelteall(){}
// function to handlecartTotal
function handleCartTotal(){}
// function to handlecartIconTotal
function handleCartIconTotal(){}
