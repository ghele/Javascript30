const bandsForm = document.querySelector("#bands");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
               'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts',
               'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

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

const allBands = [];

bands.map((band) => {
  allBands.push(checkWord(band));
});

const sortedBands = allBands.sort((a, b) => a.afterArticle > b.afterArticle ? 1 : -1);

bandsForm.innerHTML = sortedBands.map((name) => {
  if (name.article.length === 0) {
    return `
      <li>${name.afterArticle}</li>
    `;
  } else {
    return `
      <li>${name.article} ${name.afterArticle}</li>
    `;
  }
}).join('');
