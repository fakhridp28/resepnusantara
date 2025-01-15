// Fungsi untuk mencari resep berdasarkan input pencarian
function searchRecipes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const recipeDetails = document.getElementById('recipeDetails');

    const textContent = recipeDetails.innerText.toLowerCase();

    if (textContent.includes(input)) {
        recipeDetails.style.display = 'block';
    } else {
        recipeDetails.style.display = 'none';
    }
}
