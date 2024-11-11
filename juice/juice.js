let cart = [];
let currentJuice = null;

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function addToCart(suco) {
    cart.push(suco);
    saveCart(); 
    updateCart();
}


function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart(); 
    updateCart();
}


function updateCart() {
    let cartItemsContainer = document.getElementById('cartItems');
    let cartTotalContainer = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = ''; 
    let total = 0;

    cart.forEach((item, index) => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>R$ ${item.price}</p>
            </div>
            <span class="remove-item" onclick="removeFromCart(${index})">&times;</span>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += parseFloat(item.price.replace('R$', '').replace(',', '.'));
    });

    cartTotalContainer.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}


function openCart() {
    document.getElementById('cart').style.display = 'flex';
    document.querySelector('.navbar').classList.add('hidden');
}

function closeCart() {
    document.getElementById('cart').style.display = 'none';
    document.querySelector('.navbar').classList.remove('hidden');
}

function showDetails(suco) {
    var modal = document.getElementById("juiceModal");
    var modalImage = document.getElementById("modalImage");
    var modalName = document.getElementById("modalName");
    var modalDescription = document.getElementById("modalDescription");
    var modalPrice = document.getElementById("modalPrice");

    let juice = {};
    if (suco === 'suco1') {
        juice = {name: 'Pré Treino', price: 'R$ 15,00', image: 'image/juice1.png', description: 'Beterraba, Melancia, Morango e Gengibre'};
    } else if (suco === 'suco2') {
        juice = {name: 'IMUNO C', price: 'R$ 18,00', image: 'image/juice2.png', description: 'Laranja, Maçã, Cenoura e Cúrcuma'};
    } else if (suco === 'suco3') {
        juice = {name: 'Suco de Frutas Vermelhas', price: 'R$ 20,00', image: 'image/juice3.png', description: 'Descrição do Suco de Frutas Vermelhas'};
    }

    currentJuice = juice;

    modalImage.src = juice.image;
    modalName.innerText = juice.name;
    modalDescription.innerText = juice.description;
    modalPrice.innerText = juice.price;

    modal.style.display = "block";
    document.querySelector('.navbar').classList.add('hidden');
}

function closeModal() {
    document.getElementById("juiceModal").style.display = "none";
    document.querySelector('.navbar').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCart();
});
