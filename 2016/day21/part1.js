let jsc = require('js-combinatorics')

module.exports = (input, part2 = false) => {
    if (part2) {
        let expected = 'fbgdceah'
        let perms = jsc.permutation(expected.split``).toArray()
        return perms.find(p => solve(p.join``) === expected).join``
    } else {
        return solve('abcdefgh')
    }

    function solve(value) {
        input.forEach(op => {
            let split = value.split``
            if (op.startsWith('swap p')) {
                let [x, y] = op.match(/(\d+)/g)
                x = +x
                y = +y
                let a = value.slice(x, x + 1)
                let b = value.slice(y, y + 1)
                split[y] = a
                split[x] = b
                value = split.join``
            } else if (op.startsWith('swap l')) {
                let [, x, y] = op.match(/letter (\w) with letter (\w)/)

                let i1 = value.indexOf(x)
                let i2 = value.indexOf(y)

                let s = split[i1]
                split[i1] = split[i2]
                split[i2] = s
                value = split.join``
            } else if (op.startsWith('rotate b')) {
                let [a] = op.match(/\w$/)
                let steps = value.indexOf(a)
                steps = 1 + steps + (steps >= 4 ? 1 : 0)

                for (let i = 0; i < steps; i++) {
                    value = value.slice(-1) + value.slice(0, value.length - 1)
                }
            } else if (op.startsWith('rotate')) {
                let [, direction, step] = op.match(/(\w+) (\d+)/)
                if (direction === 'left') {
                    value = value.slice(step) + value.slice(0, step)
                } else {
                    value = value.slice(0 - step) + value.slice(0, value.length - step)
                }
            } else if (op.startsWith('reverse')) {
                let [x, y] = op.match(/(\d+)/g)
                x = +x
                y = +y
                let l = y - x

                let newPart = value.slice(x, y + 1).split``.reverse().join``
                split.splice(x, y - x + 1, newPart)
                value = split.join``
            } else if (op.startsWith('move')) {
                let [x, y] = op.match(/(\d+)/g).map(Number)
                let a = split.splice(x, 1)
                split.splice(y, 0, a)
                value = split.join``
            }
        })

        return value
    }
}

