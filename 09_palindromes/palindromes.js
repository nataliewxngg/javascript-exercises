const palindromes = function (str) {
    str = str.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return str.toLowerCase().split("").reverse().join("") === str;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
