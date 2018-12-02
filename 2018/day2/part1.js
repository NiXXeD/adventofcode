module.exports = input => {
    let two = 0
    let three = 0
    input
        .forEach(word => {
            let wordTwo = false
            let wordThree = false
            while (word.length) {
                let letter = word[0]
                let rex = new RegExp(letter, 'g')
                let count = word.match(rex).length
                if (count === 2 && !wordTwo) {
                    two++
                    wordTwo = true
                } else if (count === 3 && !wordThree) {
                    three++
                    wordThree = true
                }
                word = word.replace(rex, '')
            }
        })
    return two * three
}
