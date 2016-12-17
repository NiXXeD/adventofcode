module.exports = (input, size = 272) => {
    let data = input.split``.map(i => +i)
    do {
        data = data.concat(0, data.slice().reverse().map(c => (+c + 1) % 2))
    } while (data.length < size)
    data = data.slice(0, size)

    do {
        let ndata = []
        for (let i = 0; i < data.length; i += 2)
            ndata.push(data[i] === data[i + 1] ? 1 : 0)
        data = ndata
    } while (!(data.length % 2))

    return data.join``
}
