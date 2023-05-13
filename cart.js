let plus = document.querySelectorAll(".plus"),
    minus = document.querySelectorAll(".minus"),
    num = document.querySelectorAll(".num");

// SET A LOCAL DB
let DB = localStorage.getItem('CART')
if(DB) {
    DB = JSON.parse(localStorage.getItem('CART'))
}else{
    DB = []
}

//To Make The Js Code Load Faster
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){ 
    var quantityInputs = document.getElementsByClassName('num')
    for( var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('cart-btn')
    for( var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    if(location.href.includes("cart.html")) {
        updateCartTotal()
    }
    updateCartCount()
    
    document.getElementsByClassName('checkOut-btn')[0].addEventListener('click',checkOutClicked)
}

// CHECKOUT/PURCHASE FUNCTION
function checkOutClicked() {
    alert('You are about to complete your payment')
    var cartItems = document.getElementsByClassName('shopping-cart')[0]
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    localStorage.clear()
    updateCartTotal()
}

function removeCartItem(event, id){

    var btnClicked = event.target

    if(!DB) return

    DB = DB.filter(item => item.id !== id)
    localStorage.setItem("CART", JSON.stringify(DB))

    btnClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    updateCartTotal()
}

// Get cart Items
function fetchCartItems () { 
    if(DB.length)  { 
        const set = new Set(DB)
        set.forEach(item => { 
            addItemToCart(item)
        })

        setOptions()
    }

}

//Adding Items To Cart
function addToCartClicked(event){ 
    var button = event.target

    var shopitem = button.parentElement.parentElement
    var title = shopitem.children[1].innerText
    var price = shopitem.children[3].innerText
    var imageSrc = shopitem.children[0].src
    console.log(title, price, imageSrc)

    const cartItem = {
        id: DB.length + 1,
        title,
        price,
        imageSrc
    }

    DB.push(cartItem)
    localStorage.setItem('CART', JSON.stringify(DB))

    // addItemToCart(title, price, imageSrc)
    updateCartCount()
    updateCartTotal()
}

function addItemToCart({title, price, imageSrc, id}) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('box')
    var cartItems = document.getElementsByClassName('shopping-cart')[0]
    var cartItemsName = document.getElementsByClassName('title')

    for(i = 0; i < cartItemsName.length; i++){
        if(cartItemsName[i].innerText == title){
            alert('Item Added Already')
            return 
        }
    }

    var cartRowContents = `
        <button class="delete"><i class="fas fa-trash"></i></button>
        <img src="${imageSrc}" alt="" class="cart_Image">
        <div class="content">
            <h3 class="cart_Title">${title}</h3>
            <span class="prize">${price}</span>
            <span class="plus">+</span>
            <span class="num">1</span>
            <span class="minus">-</span>
        </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.prepend(cartRow)

    cartRow.getElementsByClassName('delete')[0].addEventListener('click', (event) => removeCartItem(event, id))
    cartRow.getElementsByClassName('num')[0].addEventListener('change', quantityChanged)
}

function updateCartCount() {
    let DB = localStorage.getItem('CART')
    if(DB) {
        DB = JSON.parse(localStorage.getItem('CART'))
    }else{
        DB = []
    }
    if(document.querySelector("#cart-btn")){
        const countScreen = document.querySelector("#cart-btn").children[1]
        countScreen.innerHTML = DB.length
    }

}


//Updating the prize
function updateCartTotal(){ 
    var cartItemContainer = document.querySelector(".shopping-cart")
    var cartRows = cartItemContainer.getElementsByClassName("box")
    var total = 0

    for( var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.children[2].children[1]
        var quantityElement = cartRow.children[2].children[3]

        console.log({
            quantityElement,
            priceElement
        })

        // console.log(priceElement, quantityElement)
        var price = parseFloat(priceElement.innerText.replace('₦', ''))
        var quantity = +quantityElement.innerText
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total')[0].innerText = '₦' + total
}

// Shopping Cart Add n Minus
function setOptions () { 
    plus = document.querySelectorAll(".plus")
    minus = document.querySelectorAll(".minus")
    num = document.querySelectorAll(".num")

    
    let items = new Array(DB.length).fill(0)
    // [0,0,0]
    
    plus.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            items[index] += 1
            num[index].innerText = items[index]
    
            updateCartTotal()
        })
    });
    
    minus.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if(items[index] > 1) { 
                items[index] -= 1
                num[index].innerText = items[index]
            }
    
            updateCartTotal()
        })
    });
}


    if(document.querySelector("#cart-btn")){
        document.querySelector("#cart-btn").addEventListener("click", function(e) { 
            e.preventDefault()
            location.href = "cart.html"
        })
    }
    

    if(location.href.includes("cart.html")) { 
        fetchCartItems()
        console.log("CALLING")
    }