module.exports = (input, part2 = false) => {
    if (part2) {
        const jsc = require('js-combinatorics')
        let expected = 'fbgdceah'
        let perms = jsc.permutation(expected.split``).toArray()
        return perms.find(p => solve(p) === expected).join``
    } else {
        return solve('abcdefgh'.split``)
    }

    function solve(initial) {
        return input.reduce((value, op) => {
            if (op.startsWith('swap p')) {
                let [x, y] = op.match(/(\d+)/g).map(i => +i)
                let s = value[x]
                value[x] = value[y]
                value[y] = s
            } else if (op.startsWith('swap l')) {
                let [, x, y] = op.match(/letter (\w) with letter (\w)/).map(l => value.indexOf(l))
                let s = value[x]
                value[x] = value[y]
                value[y] = s
            } else if (op.startsWith('rotate b')) {
                let [steps] = op.match(/\w$/).map(i => value.indexOf(i))
                steps = 1 + steps + (steps >= 4 ? 1 : 0)
                for (let i = 0; i < steps; i++) value = value.slice(-1).concat(value.slice(0, value.length - 1))
            } else if (op.startsWith('rotate')) {
                let [, direction, step] = op.match(/(\w+) (\d+)/)
                if (direction === 'left') value = value.slice(step).concat(value.slice(0, step))
                else value = value.slice(0 - step).concat(value.slice(0, value.length - step))
            } else if (op.startsWith('reverse')) {
                let [x, y] = op.match(/(\d+)/g).map(i => +i)
                value.splice(x, y - x + 1, ...value.slice(x, y + 1).reverse())
            } else if (op.startsWith('move')) {
                let [x, y] = op.match(/(\d+)/g).map(Number)
                let a = value.splice(x, 1)
                value.splice(y, 0, ...a)
            }
            return value
        }, initial).join``
    }
}

