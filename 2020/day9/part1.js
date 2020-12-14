module.exports = input => {
    const pre = 25
    return input
        .map(i => +i)
        .find((z, i, arr) => {
            if (i < pre) return false
            for (let x = i - pre; x < i - 1; x++) {
                for (let y = x + 1; y < i; y++) {
                    if (arr[x] + arr[y] === z) return false
                }
            }
            return true
        })
}
