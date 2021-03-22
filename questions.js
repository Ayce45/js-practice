const selectElementsStartingWithA = function (array) {
    return array.filter((item) => item.startsWith('a'));
}

const selectElementsStartingWithVowel = function (array) {
    return array.filter(value => value.match('^[aieou/i].*'));
}

const removeNullElements = function (array) {
    return array.filter(value => ![null].includes(value))
}

const removeNullAndFalseElements = function (array) {
    return array.filter(value => ![null, false].includes(value))
}

const revStr = (string) => string.split("").reverse().join("")

const reverseWordsInArray = function (array) {
    return array.map(revStr)
}

const everyPossiblePair = function (array) {
    return array.reduce((acc, value, index) => acc.concat(array.slice(index + 1).map(word => [value, word].sort())), []).sort();
}

const allElementsExceptFirstThree = function (array) {
    return array.slice(3)
}

const addElementToBeginning = function (array, element) {
    return [element, ...array]
}

const sortByLastLetter = function (array) {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

const getFirstHalf = function (string) {
    return string.slice(0, Math.ceil(string.length / 2))
}

const makeNegative = function (number) {
    return number > 0 ? -number : number
}

const numberOfPalindromes = function (array) {
    return (array.filter(value => value === revStr(value))).length
}

const shortestWord = function (array) {
    return array.reduce((prev, curr) => curr.length < prev.length ? curr : prev)
}

const longestWord = function (array) {
    return array.reduce((prev, curr) => curr.length > prev.length ? curr : prev)
}

const sumNumbers = function (array) {
    return array.reduce((prev, curr) => prev + curr)
}

const repeatElements = function (array) {
    return [...array, ...array]
}

const stringToNumber = function (string) {
    return Number(string)
}

const calculateAverage = function (array) {
    return array.reduce((prev, curr) => prev + curr) / array.length
}

const getElementsUntilGreaterThanFive = function (array) {
    return array.slice(0, array.findIndex(value => value > 5))
}

const convertArrayToObject = function (array) {
    const object = {}
    array.forEach((value, index) => !(index % 2) ? object[value] = array[index + 1] : '')
    return object
}

const getAllLetters = function (array) {
    return [...new Set(array.map(value => value.split("")).flatMap(x => x).sort())]
}

const swapKeysAndValues = function (object) {
    const newObj = {}
    Object.keys(object).forEach(key => newObj[object[key]] = key)
    return newObj
}

const sumKeysAndValues = function (object) {
    let count = 0
    Object.keys(object).forEach(key => count += Number(object[key]) + Number(key))
    return count
}

const removeCapitals = function (string) {
    return string.replace(/[A-Z]/g, '');
}

const roundUp = function (number) {
    return Math.ceil(number)
}

const formatDateNicely = function (date) {
    return date.toLocaleDateString('fr-FR')
}

const getDomainName = function (string) {
    return string.match('(?<=@)[^.]*.[^.]*(?=\\.)')[0]
}

const capitalize = (string) => string.replace(/^\w/, c => c.toUpperCase());

const titleize = function (string) {
    const ignore = ['and', 'the'];
    string = string.split('. ').map(capitalize).join('. ');
    string = string.split(' ').map(word => !ignore.includes(word) ? capitalize(word) : word).join(' ')
    return string
}

const checkForSpecialCharacters = function (string) {
    const regex = /\W|_/g
    return regex.test(string)
}

const squareRoot = function (number) {
    return Math.sqrt(number)
}

const factorial = function (number) {
    return (number < 2) ? 1 : factorial(number - 1) * number
}

const findAnagrams = function (string) {
    if (string.length < 2) {
        return [string];
    }
    const anagrams = [];
    let before, current, after;
    let shortWord, subAnagrams, newEntry;

    for (let i = 0; i < string.length; i++) {
        before = string.slice(0, i);
        current = string[i];
        after = string.slice(i + 1, string.length + 1);
        shortWord = before + after;
        subAnagrams = findAnagrams(shortWord);

        for (let j = 0; j < subAnagrams.length; j++) {
            newEntry = current + subAnagrams[j];
            anagrams.push(newEntry);
        }
    }
    return anagrams;
}

const convertToCelsius = function (number) {
    return Math.ceil((number - 32) * 5 / 9)
}

const letterPosition = function (array) {
    const ASCII_LETTER_STARTING_POSITION = 64;
    return array.map(item => item.toUpperCase().charCodeAt(0) - ASCII_LETTER_STARTING_POSITION)
}
