document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.querySelectorAll('.gallery .cards');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const searchTerm = searchInput.value.toLowerCase();

    searchResults.forEach(function(result) {
      const artworkName = result.querySelector('.cards-name').textContent.toLowerCase();

      if (artworkName.includes(searchTerm)) {
        result.style.display = 'flex';
      } else {
        result.style.display = 'none';
      }
    });
  });
});

