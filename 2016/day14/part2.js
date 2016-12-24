const md5 = require('md5')
const _ = require('lodash')
const fs = require('fs')
const cache = fs.existsSync('./2016/day14/cache.json') ? require('./cache.json') : []

module.exports = input => {
    let index = 0
    let validHashes = _.clone(cache)
    let todoHashes = []
    while (validHashes.length < 64) {
        let hash = md5(input + index)
        for (let i = 0; i < 2016; i++) {
            hash = md5(hash)
        }
        let matches = hash.match(/(.)\1\1/)

        _.remove(todoHashes, todo => {
            if (todo.index + 1000 < index) {
                return true
            }
            if (hash.includes(_.repeat(todo.char, 5))) {
                validHashes.push(todo.index)
                fs.writeFileSync('./2016/day14/cache.json', JSON.stringify(validHashes))
                return true
            }
            return false
        })

        if (matches) {
            todoHashes.push({index, char: matches[1], hash})
        }

        index++
    }

    return validHashes[63]
}
