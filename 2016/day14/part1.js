const md5 = require('md5')
const _ = require('lodash')

module.exports = input => {
    let index = 0
    let validHashes = []
    let todoHashes = []
    while (validHashes.length < 64) {
        let hash = md5(input + index)
        let matches = hash.match(/(.)\1\1/)

        _.remove(todoHashes, todo => {
            if (todo.index + 1000 < index) {
                return true
            }
            if (hash.includes(_.repeat(todo.char, 5))) {
                validHashes.push(todo.index)
                return true
            }
            return false
        })

        if (matches) {
            todoHashes.push({index, char: matches[1]})
        }

        index++
    }

    return validHashes[63]
}
