const imagesContainer = document.querySelector('.images-container');
const loader = document.querySelector('.loader');
let resultsArray = [];
let favorites = {};

class ShowContent {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _createLinkElement(result) {
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View Full Image';
    link.target = '_blank';
    return link;
  }

  _createImageElement(result) {
    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'NASA Picture of the Day';
    image.loading = 'lazy';
    image.classList.add('card-img-top');
    return image;
  }

  _createSaveTextElement(page, result) {
    const saveText = document.createElement('p');
    saveText.classList.add('clickable');
    if (page === 'result') {
      saveText.textContent = 'Add To Favorites';
      saveText.setAttribute('onclick', `saveFavorite('${result.url}')`);
    } else {
      saveText.textContent = 'Remove Favorite';
      saveText.setAttribute('onclick', `removeFavorite('${result.url}')`);
    }
    return saveText;
  }

  _createFooterParts(result) {
    // Footer Container
    const footer = document.createElement('small');
    footer.classList.add('text-muted');

    // Date
    const date = document.createElement('strong');
    date.textContent = result.date;

    // Copyright
    const copyrightResult = result.copyright === undefined ? '' : result.copyright;
    const copyright = document.createElement('span');
    copyright.textContent = `${copyrightResult}`;

    // Set Date and Copyright Info into Copyright
    footer.append(date, copyright);
    return footer;
  }

  _createCardBodyParts(page, result) {
    // Card Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Card Title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title;

    // Save Text
    const saveText = this._createSaveTextElement(page, result);

    // Card Text
    const cardText = document.createElement('p');
    cardText.textContent = result.explanation;

    // create footer parts
    const footer = this._createFooterParts(result);

    cardBody.append(cardTitle, saveText, cardText, footer);
    return cardBody;
  }

  _createCardContainer(page, result) {
    // Card Container
    const card = document.createElement('div');
    card.classList.add('card');

    // Link
    const link = this._createLinkElement(result);

    // Image
    const image = this._createImageElement(result);

    // Set Card Body
    const cardBody = this._createCardBodyParts(page, result);

    // Set image into link
    link.appendChild(image);

    // Set link and card body
    card.append(link, cardBody);
    return card;
  }

  _createDOMNodes(page) {
    // switch currentArray depend on Page
    const currentArray = page === 'result' ? resultsArray : Object.values(favorites);

    currentArray.forEach((result) => {
      if (result.media_type === 'video') {
        return;
      }
      // Card Container
      const card = this._createCardContainer(page, result);

      // Append to Images Container
      imagesContainer.appendChild(card);
    });
  }

  updateDOM(page) {
    console.log(page);
    // Get Favorites from localStorage
    if (localStorage.getItem('nasaFavorites')) {
      favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    }

    // Initialize imageContainer
    imagesContainer.textContent = '';

    // create DOM and append to imageContainer
    this._createDOMNodes(page);

    // show navigation depends on page
    this._switchNavigation(page);
  }

  _switchNavigation(page) {
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

  _addEvent() {
    const favoritesBtn = document.querySelector('#favorites');
    favoritesBtn.addEventListener('click', () => this.updateDOM());
  }
}
