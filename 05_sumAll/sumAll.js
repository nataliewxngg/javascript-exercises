const sumAll = function(m, n) {
    let out = 0;
    
    if ((typeof m != "number" || typeof n != "number") || (m < 0 || n < 0) ||
        (!Number.isInteger(m) || !Number.isInteger(n))) {
        return "ERROR";
    }
    else if (m > n) {
        const tmp = m;
        m = n;
        n = tmp;
    }
    for (let i = m; i <= n; ++i) out += i;
    return out;
};



// Do not edit below this line
module.exports = sumAll;
