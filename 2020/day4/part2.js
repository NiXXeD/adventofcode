module.exports = input => {
    const validations = [
        ({byr}) => +byr >= 1920 && +byr <= 2002,
        ({iyr}) => +iyr >= 2010 && +iyr <= 2020,
        ({eyr}) => +eyr >= 2020 && +eyr <= 2030,
        ({hgt = ''}) => {
            const [, v, u] = hgt.match(/(\d+)(in|cm)/) || []
            if (u === 'cm') return +v >= 150 && +v <= 193
            else if (u === 'in') return +v >= 59 && +v <= 76
        },
        ({hcl}) => /#[0-9a-f]{6}/.test(hcl),
        ({ecl}) => /^amb|blu|brn|gry|grn|hzl|oth$/.test(ecl),
        ({pid}) => /^\d{9}$/.test(pid)
    ]
    const lines = input.join('\n').split('\n\n')
    return lines.filter(line => {
        const data = line.match(/(\w{3}):(\S+)/g)
            .map(f => f.split(':'))
            .reduce((a, [k, v]) => ({...a, [k]: v}), {})
        return validations.every(fn => !!fn(data))
    }).length
}
