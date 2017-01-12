const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
               'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts',
               'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

console.log(bands.map((band, i) => {
  const allBands = [];
  [...allBands,checkWord(band)];
  return allBands;
}));

function checkWord(bandName) {
  const wordsLength = bandName.length;
  const bandWords = bandName.split(' ');

  if (bandWords[0] === 'The' || bandWords[0] === 'A' || bandWords[0] === 'An') {
    return {
            article: bandWords[0],
            afterArticle: bandWords.slice(1, wordsLength).join(' ')
           };

  } else {
    return {
            article: '',
            afterArticle: bandWords.join(' ')
           }
  }
}
