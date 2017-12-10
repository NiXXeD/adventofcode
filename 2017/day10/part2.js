module.exports = input => {
    let lengths = input.split``.map(a => a.charCodeAt(0)).concat([17, 31, 73, 47, 23])
    let array = [...Array(256)].map((v, i) => i)
    let result = {array}
    for (let i = 0; i < 64; i++) result = round(result.array, lengths, result.position, result.skipSize)
    array = result.array

    let output = ''
    for (let i = 0; i < 16; i++) {
        let vals = array.slice(i * 16, (i * 16) + 16)
        let char = vals.reduce((a, v) => a ^ v, 0)
        output += char.toString(16).padStart(2, '0')
    }
    return output
}

const round = (initial, lengths, position = 0, skipSize = 0) => {
    let array = lengths.reduce((acc, length) => {
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

        skipSize++

        return acc
    }, initial)
    return {array, position, skipSize}
}
