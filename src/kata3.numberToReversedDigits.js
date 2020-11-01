const numberToReversedDigits = (number) => {
    let newNumber = number
        .toString()
        .split('')
        .reverse()
        return newNumber.map(Number);
};

module.exports = numberToReversedDigits;


