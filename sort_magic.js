// Função para organizar as cartas por ordem alfabética
function sortCards() {
  var gallery = document.querySelector('.gallery');
  var cards = Array.from(gallery.getElementsByClassName('cards'));

  cards.sort(function(a, b) {
    var nameA = a.querySelector('.cards-name').textContent.toLowerCase();
    var nameB = b.querySelector('.cards-name').textContent.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  cards.forEach(function(card, index) {
    var link = card.parentElement;
    gallery.appendChild(link);
  });
}

// Chamar a função de ordenação quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', function() {
  sortCards();
});
