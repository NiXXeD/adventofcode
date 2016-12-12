module.exports = i => i.filter(line => /(\w)(?!\1)(\w)\1(?=\w*\[).*\[\w*\2\1\2/.test(line) ||
/(\w)(?!\1)(\w)\1(?=\w*]).*]\w*\2\1\2/.test(line)).length
