const imagesContainer = document.querySelector('.images-container');
const loader = document.querySelector('.loader');

let resultsArray = [];
let favorites = {};

class SwitchNavigation {
  switchNavigation(page) {
    const resultsNav = document.querySelector('#resultsNav');
    const favoritesNav = document.querySelector('#favoritesNav');

    // Scroll To Top, Remove Loader
    window.scrollTo({ top: 0, behavior: 'instant' });
    loader.classList.add('hidden');

    // Display Navigation depends on page
    if (page === 'result') {
      resultsNav.classList.remove('hidden');
      favoritesNav.classList.add('hidden');
    } else {
      resultsNav.classList.add('hidden');
      favoritesNav.classList.remove('hidden');
    }
  }
}
