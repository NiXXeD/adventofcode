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
            node.children.forEach(child => walk(child))
        }
    }

    let groups = 0
    while (nodes.length) {
        walk(nodes[0].id)
        groups++
    }
    return groups
}
