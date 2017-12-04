module.exports = input => input.map(str => str.split` `)
    .filter(words => words.filter((v, i, a) => a.indexOf(v) === i).length === words.length).length
