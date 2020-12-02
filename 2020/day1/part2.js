module.exports = input => {
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input.length; y++) {
            for (let z = 0; z < input.length; z++) {
                let v1 = +input[x], v2 = +input[y], v3 = +input[z]
                if (v1 + v2 + v3 === 2020) return v1 * v2 * v3
            }
        }
    }
}
