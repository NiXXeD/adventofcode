module.exports = input => {
    return input.join('\n').split('\n\n')
        .map(group => {
            const questions = {}
            const people = group.split('\n')
            people.forEach(person => {
                person.split('').forEach(answer => {
                    questions[answer] = (questions[answer] || 0) + 1
                })
            })
            return Object.keys(questions)
                .filter(question => questions[question] === people.length)
                .length
        })
        .reduce((a, v) => a + v, 0)
}
