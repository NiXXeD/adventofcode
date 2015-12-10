module.exports = i => i.filter(s => /(..).*\1/g.test(s) && /(.).\1/.test(s)).length
