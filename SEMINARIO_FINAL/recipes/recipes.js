let favorites = [];
let currentRecipe = null;

// Função para salvar os itens nos favoritos no localStorage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Função para carregar os itens nos favoritos do localStorage
function loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    }
}

// Adiciona a receita aos favoritos
function addToFavorites(receita) {
    favorites.push(receita);
    saveFavorites();  // Salva no localStorage
}

// Exibe os detalhes da receita no modal
function showDetails(receita) {
    var modal = document.getElementById("recipeModal");
    var modalImage = document.getElementById("modalImage");
    var modalName = document.getElementById("modalName");
    var modalDescription = document.getElementById("modalDescription");

    // Adicionando informações da receita com base na receita clicada
    let recipe = {};
    if (receita === 'recipe1') {
        recipe = {
            name: "Receita Fit 1",
            description: "Descrição detalhada da Receita Fit 1.",
            image: "image/recipe1.jpg"
        };
    } else if (receita === 'recipe2') {
        recipe = {
            name: "Receita Fit 2",
            description: "Descrição detalhada da Receita Fit 2.",
            image: "image/recipe2.jpg"
        };
    } // Repita para outras receitas...

    modalImage.src = recipe.image;
    modalName.textContent = recipe.name;
    modalDescription.textContent = recipe.description;
    currentRecipe = recipe;

    modal.style.display = "block";
}

// Fecha o modal
function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
}

// Carregar favoritos ao iniciar a página
loadFavorites();
