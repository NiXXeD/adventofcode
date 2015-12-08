module.exports = input => input.join('').length - input.map(s => s.replace(/\\\\|\\"|\\x[a-f0-9]{2}/g, 'a'))
    .join('').length + input.length * 2
