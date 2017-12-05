module.exports = input => input.map(str => str.split` `.map(word => word.split``.sort().join``).join` `)
    .filter(str => !str.match(/(\b\S+\b).*\1/)).length
