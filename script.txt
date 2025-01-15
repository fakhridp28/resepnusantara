// Fungsi untuk mengarahkan pengguna ke halaman resep yang berbeda
function goToRecipe(recipeName) {
    // Membuat URL untuk halaman resep, sesuaikan sesuai dengan nama file HTML resep
    const url = recipeName + '.html';
    
    // Arahkan ke halaman resep
    window.location.href = url;
}
