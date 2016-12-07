module.exports = i => i.filter(line => {
    let abba = [], habba = []
    line.split(/\[|]/).forEach((section, x) => {
        let res, rex = /(.)(.)\2\1/g
        while ((res = rex.exec(section)) !== null && (rex.lastIndex -= 3))
            if (res[0][0] !== res[0][1]) x % 2 ? habba.push(res[0]) : abba.push(res[0])
    })
    return abba.length > 0 && habba.length === 0
}).length
