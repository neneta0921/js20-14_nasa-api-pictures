const loader = document.querySelector('.loader');
const imagesContainer = document.querySelector('.images-container');
const added = document.querySelector('.save-confirmed');
const clickableItems = document.querySelectorAll('.add-to-favorite');


let resultsArray = [];
let favorites = {};
let isInitialLoad = true;

// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


function addToFavorite(e) {
  // Show and fadeout ADDED
  added.removeAttribute('hidden');
  setTimeout(function() {
    added.hidden = true;
  }, 3000);
  // Save favorite
  console.log(e);
}

function createDOM() {
  resultsArray.forEach((result) => {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');
    // Link
    const link = document.createElement('a');
    link.setAttribute('href', result['hdurl']);
    link.setAttribute('title', 'View Full Image');
    link.setAttribute('target', '_blank');
    // Image
    const image = document.createElement('img');
    image.setAttribute('src', result['url']);
    image.setAttribute('alt', result['title']);
    image.setAttribute('class', 'card-img-top');
    // Card Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // Card Title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result['title'];
    // Add to favorite
    const addToFavorite = document.createElement('p');
    addToFavorite.classList.add('clickable', 'add-to-favorite');
    // addToFavorite.setAttribute('onclick', 'addToFavorite()');
    addToFavorite.textContent = 'Add to Favorites';
    // Card Text
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = result['explanation'];
    // Copyright
    const copyright = document.createElement('small');
    copyright.classList.add('text-muted');
    // Date
    const date = document.createElement('strong');
    date.textContent = result['date'];
    // Copyright Info
    const copyrightInfo = document.createElement('span');
    if (result['copyright']) {
      copyrightInfo.textContent = result['copyright'];
    } else {
      copyrightInfo.textContent = '';
    }

    // Set image into link
    link.append(image)
    // Set Date and Copyright Info into Copyright
    copyright.append(date, copyrightInfo);
    // Set Card Body
    cardBody.append(cardTitle, addToFavorite, cardText, copyright);
    card.append(link, cardBody);
    // Append to Images Container
    imagesContainer.appendChild(card);
  });
}

// Get 10 Images from NASA API
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
    createDOM();
    if (isInitialLoad) {
      isInitialLoad = false;
    }
  } catch (error) {
    // Catch Error Here
    console.log(error);
  }
}


// Event Lister


// On Load
getNasaPictures();