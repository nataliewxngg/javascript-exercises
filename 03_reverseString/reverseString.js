const reverseString = function(string) {
    let out = "";
    for (let i = string.length - 1; i >= 0; --i) {
        out += string.charAt(i);
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
