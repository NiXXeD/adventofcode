module.exports = i => parseInt((+i).toString(2).slice(1) + (+i).toString(2).slice(0, 1), 2)
