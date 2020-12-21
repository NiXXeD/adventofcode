module.exports = input => {
    const [first, second] = input
    const departTime = +first
    const [answer] = second
        .split(',')
        .map(i => +i)
        .filter(i => i)
        .map(id => {
            const mul = Math.ceil(departTime / id)
            return {id, time: mul * id}
        })
        .sort(({time: a}, {time: b}) => a - b)
    return (answer.time - departTime) * answer.id
}
