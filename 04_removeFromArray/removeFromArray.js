const removeFromArray = function (arr, removeElement) {
    let out = new Array();
    for (const element of arr) {
        if (element != removeElement) out.push(element);
    }
    return out;
};

// Do not edit below this line
module.exports = removeFromArray;
