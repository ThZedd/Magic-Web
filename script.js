const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const searchTerm = searchInput.value.toLowerCase();

  Array.from(searchResults.children).forEach(function(result) {
    const title = result.querySelector('h2').textContent.toLowerCase();
    const description = result.querySelector('p').textContent.toLowerCase();
    const image = result.querySelector('img');

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      result.style.display = 'block';
      image.style.display = 'block';
    } else {
      result.style.display = 'none';
      image.style.display = 'none';
    }
  });
});