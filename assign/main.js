function reverseWords(sentence) {
    const words = sentence.split(' ');

    const reversedWords = words.map(word => reverseWord(word));

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence: " + reversedSentence);

const arrayToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = sortDescending(arrayToSort);
console.log("Sorted Array in Descending Order: " + sortedArray);