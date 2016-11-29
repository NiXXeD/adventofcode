module.exports = (input, groups = 3) => {
    let pkgs = input.map(Number), sum = pkgs.reduce((r, v) => r + v), weight = sum / groups, perms = []
    for (let n = 1; !perms.length; perms = require('js-combinatorics').combination(pkgs, ++n)
        .filter(a => a.reduce((r, v) => r + v) === weight));
    return perms.map(a => a.reduce((r, v) => r * v)).sort((a, b) => a - b)[0]
}
