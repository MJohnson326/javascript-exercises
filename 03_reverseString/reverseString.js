const reverseString = function(str) {
    let splitString = str.split('');// split string into a new array
    let reverseString = splitString.reverse();// reverse order of the new array
    let joinArray = reverseString.join('');// join all parts of reversed array 
    return joinArray;


};
reverseString('')

// Do not edit below this line
module.exports = reverseString;
