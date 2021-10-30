"!?',;.";
function mostCommonWord(paragraph, banned) {
    var brokenWords = paragraph
        .split(new RegExp(/[\s!\?',;\.]/g))
        .map(function (word) { return word.toLowerCase(); });
    var wordArray = {};
    brokenWords.forEach(function (word) {
        if (banned.includes(word) || word.length === 0) {
            return;
        }
        if (wordArray[word]) {
            wordArray[word] = wordArray[word] + 1;
        }
        else {
            wordArray[word] = 1;
        }
    });
    var entries = Object.entries(wordArray);
    var mostUsedWord = ['', -1];
    entries.forEach(function (kvp) {
        if (kvp[1] > mostUsedWord[1]) {
            mostUsedWord = kvp;
        }
    });
    return mostUsedWord[0];
}
console.log(mostCommonWord('Bob. hIt, baLl', ['bob', 'hit']));
