module.exports = input => {
    let start = 0
    let length = 0
    for (let i = 0; i < input.length; i++) {
        let cur = input[i]
        if (cur === '(') {
            start = i
        } else if (cur === ')') {
            let blah = input.slice(start + 1, i)
            let [x, y] = blah.split('x').map(i => +i)

            length += input.slice(i + 1, i + 1 + x).length * y
            start = 0
            i = i + x
        } else if (!start) {
            length++
        }
    }

    return length
}
