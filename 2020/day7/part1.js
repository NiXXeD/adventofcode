module.exports = input => {
    const bags = input
        .map(line => line.match(/^(.+) bags contain (.+)\.$/m))
        .map(([, key, phrase]) => {
            const value = phrase
                .split(', ')
                .map(s => s.match(/(\d+) (.+) bags?/) || [])
                .map(([, count, color]) => ({count: +count, color}))
                .filter(a => a.count)
            return {key, value}
        })
        .reduce((acc, {key, value}) => ({...acc, [key]: value}), {})
    const colors = Object.keys(bags)
    const findGold = key => {
        const contents = bags[key]
        if (contents.find(bag => bag.color === 'shiny gold')) return true
        else return contents.some(bag => findGold(bag.color))
    }
    return colors.map(bag => findGold(bag)).reduce((a, v) => a + v, 0)
}
