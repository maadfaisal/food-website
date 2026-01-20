// Variables to hold current selection
let currentPrice = 0;
let quantity = 1;

// Function to Open Order Modal
function openOrderPage(name, price, imgSrc) {
    const modal = document.getElementById('order-modal');
    
    // Set Data
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-img').src = imgSrc;
    
    // Reset Logic
    currentPrice = price;
    quantity = 1;
    document.getElementById('quantity').value = quantity;
    updateTotal();
    
    // Show Modal
    modal.style.display = "flex";
}

// Function to Close Modal
function closeOrderPage() {
    document.getElementById('order-modal').style.display = "none";
}

// Function to Change Quantity
function changeQty(change) {
    quantity += change;
    if (quantity < 1) quantity = 1; // Minimum 1 order
    document.getElementById('quantity').value = quantity;
    updateTotal();
}

// Update Total Price
function updateTotal() {
    let total = currentPrice * quantity;
    document.getElementById('total-price').innerText = total;
}

// Buttons Logic (Simulation)
function addToCart() {
    alert(quantity + " " + document.getElementById('modal-title').innerText + " added to cart!");
    closeOrderPage();
}

function buyNow() {
    let total = document.getElementById('total-price').innerText;
    let item = document.getElementById('modal-title').innerText;
    
    // Yahan tum WhatsApp API link kar sakte ho direct order ke liye
    let msg = `Hello, I want to order ${quantity} ${item}. Total Bill: ₹${total}`;
    alert("Redirecting to payment gateway... \nOrder Summary: " + msg);
    // window.location.href = "your_payment_link_here";
}

// Close modal if clicked outside content
window.onclick = function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target == modal) {
        closeOrderPage();
    }
}