module.exports = input => {
    let graph = input
        .map(str => str.match(/([a-z]+) \((\d+)\)( -> ([\w, ]+))?/))
        .map(([, name, weight, , children]) => ({
            name, weight: +weight, children: children ? children.split`, ` : []
        }))

    const getNode = name => graph.find(n => n.name === name)

    const getWeight = name => {
        let node = getNode(name)
        if (!node) console.log('node not found', name)
        return node.children.reduce((a, v) => a + getWeight(v), node.weight)
    }

    let answer
    let problem = require('./part1')(input)
    let lastWeight = 0
    do {
        let node = getNode(problem)
        let weights = node.children.map(child => getWeight(child))
        let index = weights.findIndex((v, i, a) => a.filter(v2 => v2 === v).length === 1)
        if (index >= 0) {
            lastWeight = index ? weights[0] : weights[1]
            problem = node.children[index]
        } else {
            let weight = weights.reduce((a, v) => v + a) + node.weight
            let diff = weight - lastWeight
            answer = node.weight - diff
        }
    } while (!answer)

    return answer
}
