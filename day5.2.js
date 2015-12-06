console.log(require('fs').readFileSync('input-day5', 'utf-8').split('\n')
    .filter(s => /(..).*\1/g.test(s) && /(.).\1/.test(s)).length)
