module.exports = input => {
    let nodes = input
        .map(str => str.match(/(\d+) \S+ (.+)/))
        .map(([, id, children]) => ({
            id, children: children.split`, `
        }))

    const walk = id => {
        let index = nodes.findIndex(n => n.id === id)
        if (index >= 0) {
            let node = nodes[index]
            nodes.splice(index, 1)
            return 1 + node.children.reduce((acc, val) => acc + walk(val), 0)
        }
        return 0
    }

    return walk('0')
}
