module.exports = i => {
    do i = (parseInt(i, 36) + 1).toString(36).replace(/0/, 'a').replace(/i/, 'j').replace(/l/, 'm').replace(/o/, 'p')
    while (!/(.)\1.*(?!\1)(.)\2/.test(i) || !/(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(i))
    return i
}
