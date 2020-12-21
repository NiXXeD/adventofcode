module.exports = input => {
    const [, second] = input
    const ids = second
        .split(',')
        .map((id, index) => ({
            id: +id || 0,
            index: index
        }))
        .filter(({id}) => id)
    const [first] = ids

    return ids.reduce(([t, inc], {id, index}) => {
        let results = []
        do {
            t += inc
            if ((t + index) % id === 0) results.push(t)
        } while (results.length < 2)
        const [first, second] = results
        return [first, second - first]
    }, [0, first.id])[0]
}
