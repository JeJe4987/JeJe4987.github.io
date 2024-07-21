function addToCart(product) {
    let cartItems = document.getElementById('cart-items');
    let newItem = document.createElement('div');
    newItem.textContent = product;
    newItem.className = 'cart-item';
    cartItems.appendChild(newItem);
    alert(product + ' telah ditambahkan ke keranjang.');
}

function checkout() {
    let cartItems = document.getElementById('cart-items').children;
    if (cartItems.length === 0) {
        alert('Keranjang belanja Anda kosong.');
    } else {
        alert('Terima kasih telah berbelanja. Pesanan Anda sedang diproses.');
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    this.reset();
});
