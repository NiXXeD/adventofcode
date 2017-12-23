module.exports = input => {
    const isPrime = n => {
        for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) if (n % i === 0) return false
        return true
    }

    // TODO: make these read from input
    //b = 81 * 100 + 100000 = 108100
    //c = 81 * 100 + 100000 + 17000 = 125100
    let b = 108100, c = 125100, h = 0
    for (let i = b; i <= c; i += 17) {
        if (!isPrime(i)) h++
    }

    return h
}
