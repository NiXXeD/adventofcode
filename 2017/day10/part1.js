let position = 0
module.exports = input => input.split`,`.map(v => +v).reduce((acc, length, skipSize) => {
    let section = acc.slice(position, position + length)

    if (section.length < length) {
        let wrapped = section.concat(acc.slice(0, length - section.length)).reverse()

        let firstPart = wrapped.slice(0, section.length)
        let secondPart = wrapped.slice(firstPart.length - wrapped.length)

        acc.splice(position, firstPart.length, ...firstPart)
        acc.splice(0, secondPart.length, ...secondPart)
    } else {
        section = section.reverse()
        acc.splice(position, section.length, ...section)
    }

    position += (skipSize + length)
    position %= acc.length

    return acc
}, [...Array(256)].map((v, i) => i)).slice(0, 2).reduce((a, v) => a * v, 1)
