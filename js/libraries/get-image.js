// Get 10 Images from NASA API
async function getNasaPictures() {
  // NASA API
  const count = 10;
  const apiKey = 'DEMO_KEY';
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  // show loader
  loader.classList.remove('hidden');
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    updateDOM('result');
  } catch (error) {
    // Catch Error Here
    console.log(error);
  }
}
