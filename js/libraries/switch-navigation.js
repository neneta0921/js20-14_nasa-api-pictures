const imagesContainer = document.querySelector('.images-container');
const loader = document.querySelector('.loader');

let resultsArray = [];
let favorites = {};

// Scroll To Top, Remove Loader, Show Content
function showContent(page) {
  const resultsNav = document.querySelector('#resultsNav');
  const favoritesNav = document.querySelector('#favoritesNav');
  window.scrollTo({ top: 0, behavior: 'instant' });
  loader.classList.add('hidden');

  if (page === 'result') {
    resultsNav.classList.remove('hidden');
    favoritesNav.classList.add('hidden');
  } else {
    resultsNav.classList.add('hidden');
    favoritesNav.classList.remove('hidden');
  }
}
