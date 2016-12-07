module.exports = i => i.filter(line => /([^[])([^[])\2\1/g.test(line) && /\[.*?(.)(.)\2\1.*?]/.test(line)).length
