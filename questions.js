var selectElementsStartingWithA = function (array) {
    return array.filter(item => item[0] === "a");
}

var selectElementsStartingWithVowel = function (array) {
    return array.filter(item => /^[aeiou]/i.test(item.charAt(0)));
}

var removeNullElements = function (array) {
    return array.filter(item => item !== null);
}

var removeNullAndFalseElements = function (array) {
    return array.filter(item => item !== null && item !== false);
}

var reverseWordsInArray = function (array) {
    return array.map(item => item.split('').reverse().join(''));
}

var everyPossiblePair = function(array) {
    return [...array.flatMap(
        (value, index) => array.slice(index + 1).map(word => [value, word].sort())
    ).sort()]
}

var allElementsExceptFirstThree = function (array) {
    return array.filter((element, index) => index > 2);
}

var addElementToBeginning = function (array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function (array) {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

var getFirstHalf = function (string) {
    return string.slice(0, Math.round(string.length / 2));
}

var makeNegative = function (number) {
    return number > 0 ? number * -1 : number
}

var numberOfPalindromes = function (array) {
    const isPalindrome = (str) => {
        const reverse = str.split('').reverse().join('')
        return reverse === str
    }
    let counter = 0;
    array.forEach((item) => {
        if (isPalindrome(item))
            counter++;
    })
    return counter;
}

var shortestWord = function (array) {
    return array.sort((a, b) => a.length - b.length).shift();
}

var longestWord = function (array) {
    return array.sort((a, b) => b.length - a.length).shift();
}

var sumNumbers = function (array) {
    return array.reduce((a, b) => a + b)
}

var repeatElements = function (array) {
    let clonedArray = [...array];
    return clonedArray.concat(array);
}

var stringToNumber = function (string) {
    return Number(string);
}

var calculateAverage = function (array) {
    return array.reduce((a, b) => a + b) / array.length
}

var getElementsUntilGreaterThanFive = function (array) {
    return array.filter((item) => item <= 5)
}

var convertArrayToObject = function (array) {
    let object = {};
    for (let i = 0; i < array.length; i += 2) {
        object[array[i]] = array[i + 1]
    }
    return object
}

var getAllLetters = function (array) {
    let result = [];
    array.forEach((item) => {
        result.push(item.split(''));
    })
    return result.flat(2).sort().filter((item, pos, self) => {
        return self.indexOf(item) === pos;
    });
}

var swapKeysAndValues = function (object) {
    return Object.keys(object).reduce((ret, key) => {
        ret[object[key]] = key;
        return ret;
    }, {});
}

var sumKeysAndValues = function (object) {
    let sum = 0;
    for (let key in object) {
        sum = stringToNumber(sum) + stringToNumber(key) + stringToNumber(object[key]);
    }
    return sum;
}

var removeCapitals = function (string) {
    return string.split('').filter((item) => item === item.toLowerCase()).join('');
}

var roundUp = function (number) {
    return Math.ceil(number)
}

var formatDateNicely = function (date) {
    return new Date(date).toLocaleDateString()
}

var getDomainName = function (string) {
    string = string.split('@')[1].split('.')
    string.pop()
    return string.join('.');
}

var titleize = function (string) {
    return null;
}

var checkForSpecialCharacters = function (string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string)
}

var squareRoot = function (number) {
    return Math.sqrt(number);
}

var factorial = function (number) {
    return (number<2)?1:factorial(number-1)*number
}

var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    return Math.ceil((number - 32) / 1.8)
}

var letterPosition = function (array) {
    return array.map(item => item.toUpperCase().charCodeAt(0) - 64)
}
