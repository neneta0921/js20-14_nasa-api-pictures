class HandleFavorite {
  // Add result to Favorites
  saveFavorite(itemUrl) {
    const saveConfirmed = document.querySelector('.save-confirmed');

    // Loop through Results Array to select Favorite
    resultsArray.forEach((item) => {
      if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
        favorites[itemUrl] = item;

        // Show Save Confirmation for 2 seconds
        saveConfirmed.hidden = false;
        setTimeout(() => {
          saveConfirmed.hidden = true;
        }, 2000);

        // Set Favorites in localStorage
        localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
      }
    });
  }

  // Remove item from Favorites
  removeFavorite(itemUrl) {
    if (favorites[itemUrl]) {
      delete favorites[itemUrl];

      // Set Favorites in localStorage
      localStorage.setItem('nasaFavorites', JSON.stringify(favorites));

      // Reload Page
      updateDOM('favorites');
    }
  }
}
