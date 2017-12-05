module.exports = input => input.filter(str => !str.match(/(\b\S+\b).*\1/)).length
