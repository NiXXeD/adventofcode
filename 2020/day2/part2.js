module.exports = input => {
    return input
        .map(s => s.match(/(\d+)-(\d+) (\w+): (\w+)/))
        .filter(([, a, b, letter, pass]) => {
            return (pass[+a - 1] === letter) ^ (pass[+b - 1] === letter)
        }).length
}
