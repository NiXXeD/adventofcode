module.exports = input => {
    let len, rex = new RegExp('(' + [...Array(26)].map((v, i) => String.fromCharCode(65 + i) + String.fromCharCode(97 + i))
        .concat([...Array(26)].map((v, i) => String.fromCharCode(97 + i) + String.fromCharCode(65 + i)))
        .join('|') + ')', 'g')
    do {
        len = input.length
        input = input.replace(rex, '')
    } while (len !== input.length)
    return input.length
}
