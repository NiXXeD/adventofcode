module.exports = i => i.filter(line => {
    let aba = [], bab = []
    line.split(/\[|]/).forEach((section, x) => {
        let res, rex = /(.)(.)\1/g
        while ((res = rex.exec(section)) !== null && (rex.lastIndex -= 2))
            if (res[0][0] !== res[0][1]) x % 2 ? bab.push(res[0]) : aba.push(res[0])
    })
    return aba.some(a => bab.includes(`${a[1]}${a[0]}${a[1]}`))
}).length
