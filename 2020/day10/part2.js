module.exports = input => {
    const [, , a, b, c] = input
        .map(i => +i)
        .sort((a, b) => a - b)
        .map((v, i, arr) => v - (arr[i - 1] || 0))
        .join('')
        .split('3')
        .map(s => s.length)
        .reduce((a, v) => {
            a[v]++
            return a
        }, [0, 0, 0, 0, 0, 0])
    return Math.pow(2, a) * Math.pow(4, b) * Math.pow(7, c)
}
