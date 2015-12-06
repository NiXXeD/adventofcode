module.exports = input => input.filter(s => !/ab|cd|pq|xy/.test(s) && (s.match(/[aeiou]/g) || []).length > 2 && /(.)\1+/.test(s)).length
