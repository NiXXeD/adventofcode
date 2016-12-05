module.exports = i => i.map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
    .map(v => ({name: v[1].replace(/-/g, '').split``, sector: +v[2]}))
    .map(v => Object.assign(v, {real: v.name.map(l => String.fromCharCode((((l.charCodeAt(0) - 97) + v.sector) % 26) + 97)).join``}))
    .find(v => v.real === 'northpoleobjectstorage').sector
