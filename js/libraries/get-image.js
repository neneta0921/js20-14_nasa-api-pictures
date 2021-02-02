class GetImage {
  _getApiUrl(count) {
    const apiKey = 'DEMO_KEY';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
    return apiUrl;
  }

  // Get Images from NASA API
  async getNasaPictures(count) {
    // NASA API
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
}
