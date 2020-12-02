module.exports = input => {
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input.length; y++) {
            let v1 = +input[x], v2 = +input[y]
            if (v1 + v2 === 2020) return v1 * v2
        }
    }
}
