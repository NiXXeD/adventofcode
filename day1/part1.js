module.exports = input => Array.from(input).reduce((r, v) => r + (v === '(' ? 1 : -1), 0)
