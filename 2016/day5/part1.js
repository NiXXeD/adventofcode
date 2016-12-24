const _ = require('lodash')
const md5 = require('md5')
const fs = require('fs')
const cache = fs.existsSync('./2016/day5/cache.json') ? require('./cache.json') : []

module.exports = input => {
    let password = ''
    let index = 0
    let found = 0
    let cachedIndexes = _.clone(cache)

    while (found < 8) {
        let hash = md5(`${input}${index}`)
        if (_.startsWith(hash, '00000')) {
            password += hash[5]
            found++

            if (!_.includes(cache, index)) {
                cache.push(index)
                fs.writeFileSync('./2016/day5/cache.json', JSON.stringify(cache))
            }
        }

        index = cachedIndexes.length ? cachedIndexes.shift() : index + 1
    }
    return password
}
