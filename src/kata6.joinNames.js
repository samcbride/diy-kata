const joinNames = namesObj => {
    let array = namesObj.map(a => a.name);
    if (namesObj.length === 1) {
        return namesObj[0].name;
    } else {
    let newArray = array.slice(0, array.length - 1)
                        .join(', ');
    let lastWord = array.slice(array.length - 1, array.length);
    return newArray + ' & ' + lastWord;
}};
module.exports = joinNames;
