class GetImage {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _getApiUrl(count) {
    const apiKey = 'DEMO_KEY';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
    return apiUrl;
  }

  // Get Images from NASA API
  async getNasaPictures() {
    // NASA API
    const count = 5;
    const apiUrl = this._getApiUrl(count);

    // show loader
    loader.classList.remove('hidden');

    try {
      const response = await fetch(apiUrl);
      resultsArray = await response.json();
      updateDOM('result');
    } catch (error) {
      console.log(error);
    }
  }

  _addEvent() {
    const resultButton = document.querySelector('#result-more');
    const favoriteButton = document.querySelector('#favorite-more');
    resultButton.addEventListener('click', () => this.getNasaPictures());
    favoriteButton.addEventListener('click', () => {
      this.getNasaPictures();
    });
  }
}
