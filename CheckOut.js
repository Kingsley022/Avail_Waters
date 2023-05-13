function orderNowClicked(event){ 
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