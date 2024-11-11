let cart = [];
let currentJuice = null;

// Função para salvar os itens do carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para carregar os itens do carrinho do localStorage
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Adiciona o item ao carrinho
function addToCart(suco) {
    cart.push(suco);
    saveCart();  // Salva no localStorage
    updateCart();
}

// Remove o item do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();  // Salva no localStorage
    updateCart();
}

// Atualiza a visualização do carrinho
function updateCart() {
    let cartItemsContainer = document.getElementById('cartItems');
    let cartTotalContainer = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = '';  // Limpar a lista de itens do carrinho
    let total = 0;

    // Mostrar os itens no carrinho
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

    // Atualizar o total
    cartTotalContainer.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Abre o carrinho
function openCart() {
    document.getElementById('cart').style.display = 'flex';
    document.querySelector('.navbar').classList.add('hidden');  // Esconde a navbar ao abrir o carrinho
}

// Fecha o carrinho
function closeCart() {
    document.getElementById('cart').style.display = 'none';
    document.querySelector('.navbar').classList.remove('hidden');  // Mostra a navbar novamente
}

// Exibe os detalhes do suco no modal
function showDetails(suco) {
    var modal = document.getElementById("juiceModal");
    var modalImage = document.getElementById("modalImage");
    var modalName = document.getElementById("modalName");
    var modalDescription = document.getElementById("modalDescription");
    var modalPrice = document.getElementById("modalPrice");

    // Adicionando informações do suco com base no suco clicado
    let juice = {};
    if (suco === 'suco1') {
        juice = {name: 'Pré Treino', price: 'R$ 15,00', image: 'image/juice1.png', description: 'Beterraba, Melancia, Morango e Gengibre'};
    } else if (suco === 'suco2') {
        juice = {name: 'IMUNO C', price: 'R$ 18,00', image: 'image/juice2.png', description: 'Laranja, Maçã, Cenoura e Cúrcuma'};
    } else if (suco === 'suco3') {
        juice = {name: 'Suco de Frutas Vermelhas', price: 'R$ 20,00', image: 'image/juice3.png', description: 'Descrição do Suco de Frutas Vermelhas'};
    }

    currentJuice = juice;

    // Exibe a imagem, nome, descrição e preço no modal
    modalImage.src = juice.image;
    modalName.innerText = juice.name;
    modalDescription.innerText = juice.description;
    modalPrice.innerText = juice.price;

    // Exibe o modal
    modal.style.display = "block";
    document.querySelector('.navbar').classList.add('hidden');  // Esconde a navbar ao abrir o modal
}

// Fecha o modal
function closeModal() {
    document.getElementById("juiceModal").style.display = "none";
    document.querySelector('.navbar').classList.remove('hidden');  // Mostra a navbar novamente
}

// Inicializa o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadCart();  // Carrega os itens do carrinho do localStorage
    updateCart(); // Atualiza a interface do carrinho
});
