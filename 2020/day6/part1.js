module.exports = input => {
    return input.join('\n').split('\n\n')
        .map(group => group.replace(/\W/g, ''))
        .map(group => new Set(group.split('')).size)
        .reduce((a, v) => a + v, 0)
}
