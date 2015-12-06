console.log(require('fs').readFileSync('input', 'utf-8').split('\n')
    .filter(s => /(..).*\1/g.test(s) && /(.).\1/.test(s)).length)
