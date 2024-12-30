const repeatString = function (string, num) {
    if (num < 0) return "ERROR";

    let out = "";
    for (num; num > 0; --num) 
        out += string;
    return out;
};

console.log(repeatString("hi", 3));

// Do not edit below this line
module.exports = repeatString;
