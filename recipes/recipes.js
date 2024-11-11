let favorites = [];
let currentRecipe = null;


function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    }
}

function addToFavorites(receita) {
    favorites.push(receita);
    saveFavorites(); 
}


function showDetails(receita) {
    var modal = document.getElementById("recipeModal");
    var modalImage = document.getElementById("modalImage");
    var modalName = document.getElementById("modalName");
    var modalDescription = document.getElementById("modalDescription");

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
    }

    modalImage.src = recipe.image;
    modalName.textContent = recipe.name;
    modalDescription.textContent = recipe.description;
    currentRecipe = recipe;

    modal.style.display = "block";
}


function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
}

loadFavorites();
