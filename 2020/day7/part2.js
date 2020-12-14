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
    const bagCounts = (key) => {
        const contents = bags[key]
        return contents.length
            ? contents.reduce((acc, bag) => acc + bag.count + bag.count * bagCounts(bag.color), 0)
            : 0
    }
    return bagCounts('shiny gold')
}
