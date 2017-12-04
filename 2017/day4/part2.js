module.exports = input => input.map(str => str.split` `)
    .filter(words => words.map(word => word.split``.sort().join``)
        .filter((v, i, a) => a.indexOf(v) === i).length === words.length
    ).length
