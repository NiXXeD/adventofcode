module.exports = input => {
    return input.filter(line => {
        let aba = [], bab = []
        line.split(/\[|]/).forEach((section, i) => {
            let re = /(.)(.)\1/g
            let matches = []
            let result

            while ((result = re.exec(section)) !== null) {
                matches.push(result[0])
                re.lastIndex -= 2
            }

            if (i % 2) {
                bab = bab.concat(matches)
            } else {
                aba = aba.concat(matches)
            }
        })

        return aba
            .filter(a => a[0] !== a[1])
            .some(a => bab.includes(`${a[1]}${a[0]}${a[1]}`))
    }).length
}
