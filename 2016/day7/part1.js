module.exports = i => i.filter(l => /(\w)(?=(?!\1)(\w)\2\1)/g.test(l) && !/(\w)(?=(?!\1)(\w)\2\1\w*])/g.test(l)).length
