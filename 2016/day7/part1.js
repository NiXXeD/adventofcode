module.exports = i => i.filter(l => /([^[])([^[])\2\1/g.test(l) && /\[.*?(.)(.)\2\1.*?]/.test(l)).length
