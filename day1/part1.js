module.exports = i => i.split``.reduce((r, v) => r + (v === '(' ? 1 : -1), 0)
