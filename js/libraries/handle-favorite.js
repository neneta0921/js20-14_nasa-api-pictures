class HandleFavorite {
  _showToast(time) {
    const saveConfirmed = document.querySelector('.save-confirmed');

    // Show Save Confirmation for 2 seconds
    saveConfirmed.hidden = false;
    setTimeout(() => {
      saveConfirmed.hidden = true;
    }, time);
  }

  // Add result to Favorites
  saveFavorite(itemUrl) {
    // Loop through Results Array to select Favorite
    resultsArray.forEach((item) => {
      // if (result.url.includes(`${itemUrl}`)) {
      if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
        favorites[itemUrl] = item;

        // Show Save Confirmation for 2 seconds
        this._showToast(2000);

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
