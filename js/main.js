// const nav = new SwitchNavigation();
const showContent = new ShowContent();
const getImage = new GetImage(() => showContent.updateDOM());
const handleFavorite = new HandleFavorite(() => showContent.updateDOM());

const saveFavorite = () => handleFavorite.saveFavorite();
const removeFavorite = () => handleFavorite.removeFavorite();

// On Load
getImage.getNasaPictures(5);
