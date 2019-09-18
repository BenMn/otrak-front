/* eslint-disable import/prefer-default-export */
// Import


// For LandingPage--Aired: Pour filtrer le nombre de résultat d'un tableau par langue et par note.
// Avoir que 8 resultats, 4 langues US et 4 langue JP avec les meilleures notes.


// Trie SearchInputResult.
export function compareTitle(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  }
  else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}


export function compareRating(a, b) {
  const ratingA = a.rating.toUpperCase();
  const ratingB = b.rating.toUpperCase();

  let comparison = 0;
  if (ratingA > ratingB) {
    comparison = 1;
  }
  else if (ratingA < ratingB) {
    comparison = -1;
  }
  return comparison;
}

export function compareReleaseDate(a, b) {
  const releaseDateA = a.premiered.toUpperCase();
  const releaseDateB = b.premiered.toUpperCase();

  let comparison = 0;
  if (releaseDateA > releaseDateB) {
    comparison = 1;
  }
  else if (releaseDateA < releaseDateB) {
    comparison = -1;
  }
  return comparison;
}

export function compareLanguage(a, b) {
  const languageA = a.language.toUpperCase();
  const languageB = b.language.toUpperCase();

  let comparison = 0;
  if (languageA > languageB) {
    comparison = 1;
  }
  else if (languageA < languageB) {
    comparison = -1;
  }
  return comparison;
}
