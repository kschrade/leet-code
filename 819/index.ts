`!?',;.`;

function mostCommonWord(paragraph: string, banned: string[]): string {
  const brokenWords = paragraph
    .split(new RegExp(/[\s!\?',;\.]/g))
    .map((word) => word.toLowerCase());

  const wordArray: { [key: string]: number } = {};

  brokenWords.forEach((word) => {
    if (banned.includes(word) || word.length === 0) {
      return;
    }
    if (wordArray[word]) {
      wordArray[word] = wordArray[word] + 1;
    } else {
      wordArray[word] = 1;
    }
  });

  const entries = Object.entries(wordArray);

  let mostUsedWord: [string, number] = ['', -1];

  entries.forEach((kvp) => {
    if (kvp[1] > mostUsedWord[1]) {
      mostUsedWord = kvp;
    }
  });

  return mostUsedWord[0];
}

console.log(mostCommonWord('Bob. hIt, baLl', ['bob', 'hit']));
