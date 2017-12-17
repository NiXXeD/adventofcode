module.exports = input => {
    let steps = +input, buffer = [0], index = 0

    for (let i = 0; i < 2017; i++) {
        index = (index + steps) % buffer.length + 1
        buffer.splice(index, 0, i + 1)
    }

    return buffer[index + 1]
}
