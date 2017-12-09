module.exports = input => {
    while (input.includes('!')) input = input.replace(/(!.)/g, '')
    return input.match(/<([^>]*)>/g).reduce((acc, val) => acc + val.length - 2, 0)
}
