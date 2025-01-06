const findTheOldest = function(arr) {
    let oldestPerson;
    
    arr.reduce((total, curr) => {
        let currAge;
        if (curr.yearOfDeath == undefined) currAge = (new Date()).getFullYear() - curr.yearOfBirth;
        else currAge = curr.yearOfDeath - curr.yearOfBirth;

        if (currAge > total) {
            oldestPerson = curr;
            return currAge;
        }
        return total;
    }, 0);
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
