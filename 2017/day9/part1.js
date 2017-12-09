module.exports = input => {
    while (input.includes('!')) input = input.replace(/(!.)/g, '')
    while (input.includes('<')) input = input.replace(/<[^>]*>/g, '')

    return input.split``.reduce((acc, val) => {
        if (val === '{') {
            acc.depth++
            acc.score += acc.depth
        } else if (val === '}') {
            acc.depth--
        }
        return acc
    }, {depth: 0, score: 0}).score
}
