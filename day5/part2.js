module.exports = input => input.filter(s => /(..).*\1/g.test(s) && /(.).\1/.test(s)).length
