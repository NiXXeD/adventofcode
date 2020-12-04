module.exports = input => {
    const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    const lines = input.join('\n').split('\n\n')
    return lines.filter(line => {
        const fields = line.match(/(\w{3})(?=:)/g)
        return required.every(f => fields.includes(f))
    }).length
}
