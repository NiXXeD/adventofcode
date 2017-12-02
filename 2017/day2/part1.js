module.exports = input => input.map(l => l.split(/\s/)).reduce((acc, val) => acc + Math.max(...val) - Math.min(...val), 0)
