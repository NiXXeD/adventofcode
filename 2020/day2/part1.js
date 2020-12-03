module.exports = input => {
    return input
        .map(s => s.match(/(\d+)-(\d+) (\w+): (\w+)/))
        .filter(([, min, max, letter, pass]) => {
            const count = pass.split(letter).length - 1
            return +min <= count && count <= +max
        }).length
}
