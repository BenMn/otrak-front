/* eslint-disable import/prefer-default-export */
// Import


// For LandingPage--Aired: Pour filtrer le nombre de résultat d'un tableau par langue et par note.
// Avoir que 8 resultats, 4 langues US et 4 langue JP avec les meilleures notes.

export const FilteredAiredLandingPage = (completeArray) => {
  const japanShows = completeArray
    .filter((show) => show.show_language === 'Japanese')
    // .sort((show) => show.show_rating)
    .filter((show, index) => index < 4);
  console.log(japanShows);

  const englishShows = completeArray
    .filter((show) => show.show_language === 'English')
    // .sort((show) => show.show_rating)
    .filter((show, index) => index < 4);
  console.log(englishShows);

  console.log(japanShows, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JAPAN SHOWS');
  console.log(englishShows, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ENGLISH SHOWS');
};

