document.getElementById('demo').innerHTML= "my fist javascript class";
document.write(4+6);
window.alert(7+12);
console.log(12+20);

// script.js

let cart = [];

function addToCart(productName, productPrice) {
    // Create a product object
    const product = {
        name: productName,
        price: productPrice,
    };

    // Add product to cart array
    cart.push(product);
    
    // Notify user
    alert(`${productName} has been added to your cart!`);
    console.log("Cart:", cart); // Optional, for debugging
}

// Optionally, you could add more functions to show the cart, remove items, or checkout.
