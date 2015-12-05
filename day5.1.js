console.log(require('fs').readFileSync('input-day5', 'utf-8').split('\n')
    .filter(s => !/ab|cd|pq|xy/.test(s))
    .filter(s => (s.match(/[aeiou]/g) || []).length > 2)
    .filter(s => /(.)\1+/.test(s)).length)
