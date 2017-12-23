module.exports = (input, iterations = 5) => {
    let image = `.#./..#/###`.split`/`
    const flip = it => it.split`/`.map(line => line.split``.reverse().join``)
    const rotate = it => {
        let value = it.map(str => str.split``)
        for (let y = 0; y < it.length; y++) {
            for (let x = 0; x < it[y].length; x++) {
                value[y][x] = it[it.length - 1 - x][y]
            }
        }
        return value.map(arr => arr.join``)
    }
    const rules = input.map(str => str.split` `)
        .map(([i, , o]) => {
            let a = i.split`/`, a1 = rotate(a), a2 = rotate(a1), a3 = rotate(a2)
            let b = flip(i), b1 = rotate(b), b2 = rotate(b1), b3 = rotate(b2)
            return {
                size: a.length,
                input: [a, a1, a2, a3, b, b1, b2, b3],
                output: o.split`/`
            }
        })
    const applyRule = (dx, dy, size, newImage) => {
        let {output} = rules.find(rule => rule.size === size && rule.input.some(criteria => {
            for (let i = 0; i < size; i++) {
                if (criteria[i] !== image[dy + i].slice(dx, dx + size)) return false
            }
            return true
        }))

        let outputSize = output.length
        let min = (dy / size) * outputSize, max = min + outputSize
        for (let y = min; y < max; y++) {
            newImage[y] += output[y - min]
        }
    }

    for (let i = 0; i < iterations; i++) {
        let size = image.length
        let div = size % 2 === 0 ? 2 : 3
        let newSize = size + (size / div)
        let newImage = [...Array(newSize)].map(() => '')
        for (let p = 0; p < ((size / div) ** 2); p++) {
            let dx = (p * div) % size, dy = Math.floor((p * div) / size) * div
            applyRule(dx, dy, div, newImage)
        }
        image = newImage
    }

    return image.join``.split``.reduce((a, v) => a + (v === '#' ? 1 : 0), 0)
}
