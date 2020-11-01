const joinNames = namesObj => {
    let array = namesObj.map(a => a.name);
    let newArray = array.slice(0, array.length - 1)
                        .join(', ');
    let lastWord = array.slice(array.length - 1, array.length);
    return newArray + ' & ' + lastWord;
};
module.exports = joinNames;
