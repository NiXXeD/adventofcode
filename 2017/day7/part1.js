module.exports = input => input.join` `.match(/([a-z]+)/g).filter((v, i, a) => a.filter(v2 => v2 === v).length === 1)[0]
