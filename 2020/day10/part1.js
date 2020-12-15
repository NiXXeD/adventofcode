module.exports = input => input
    .map(i => +i)
    .sort((a, b) => a - b)
    .map((v, i, arr) => v - (arr[i - 1] || 0))
    .reduce((a, v) => {
        a[v]++
        return a
    }, [1, 0, 1, 1])
    .reduce((a, v) => a * v, 1)
