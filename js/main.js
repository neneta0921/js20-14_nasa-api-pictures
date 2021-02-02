// const nav = new SwitchNavigation();
const showContent = new ShowContent();
const getImage = new GetImage();
const handleFavorite = new HandleFavorite();

const updateDOM = (page) => showContent.updateDOM(page);
const saveFavorite = handleFavorite.saveFavorite;
const removeFavorite = handleFavorite.removeFavorite;

// On Load
getImage.getNasaPictures();
