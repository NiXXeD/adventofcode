console.log(require('fs').readFileSync('input-day2', 'utf-8').trimRight().split('\n').map(i => i.split('x')
    .map(i => +i).sort((a, b) => a - b)).map(d => ({a: 3 * d[0] * d[1] + 2 * d[1] * d[2] + 2 * d[2] * d[0],
    b: 2 * (d[0] + d[1]) + d[0] * d[1] * d[2]})).reduce((r, v) => ({a: r.a + v.a, b: r.b + v.b}), {a: 0, b: 0}))
