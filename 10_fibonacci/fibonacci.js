const fibonacci = function(num) {
    if (typeof num == "string") num = Number(num);
    if (num >= 0 && num < 2) return num;
    else if (num == 2) return 1;
    else if (num < 0) return "OOPS";
    let prev = 1;
    let pprev = 1;
    
    for (let i = 3; i < num; ++i) {
        let tmp = prev;
        prev = prev + pprev;
        pprev = tmp;
    }
    return prev + pprev;
};

console.log(fibonacci("2"));

// Do not edit below this line
module.exports = fibonacci;
