module.exports = (i, s = 272) => {
    for (var d = i; d.length < s; d = `${d}0${d.split``.reverse().map(c => (+c + 1) % 2).join``}`);
    for (d = d.slice(0, s); !(d.length % 2); d = d.match(/../g).map(s => s[0] == s[1] ? '1' : '0').join``);
    return d
}
