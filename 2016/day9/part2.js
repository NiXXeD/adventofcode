module.exports = input => {
    let start = -1
    let length = 0
    for (let i = 0; i < input.length; i++) {
        let cur = input[i]
        if (cur === '(') {
            start = i
        } else if (cur === ')') {
            let blah = input.slice(start + 1, i)
            let [x, y] = blah.split('x').map(i => +i)

            let sub = input.slice(i + 1, i + 1 + x)
            let newLen = value(sub) * y
            if (newLen > 0) length += newLen

            i = i + x
            start = -1
        } else if (start < 0) {
            length++
        }
    }

    return length
}

function value(str) {
    let left = str.indexOf('(')
    let right = str.indexOf(')')
    if (left >= 0 && right >= 0) {
        let seq = str.slice(left + 1, right)
        let [x, y] = seq.split('x').map(i => +i)
        let sub = str.slice(right + 1, right + 1 + x)
        let len = value(sub) * y
        let rest = str.slice(right + 1 + x)
        return len + (rest.length ? value(rest) : 0)
    } else {
        return str.length
    }
}
