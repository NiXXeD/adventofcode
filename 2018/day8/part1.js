module.exports = input => {
    let split = input.split` `.map(i => +i)
    let metadata = []

    let parseNode = data => {
        let childCount = data.shift()
        let metaCount = data.shift()

        let remainder = data
        for (let i = 0; i < childCount; i++) {
            remainder = parseNode(remainder)
        }

        if (metaCount) {
            metadata.push(...remainder.splice(0, metaCount))
        }

        return remainder
    }
    parseNode(split)

    return metadata.reduce((a, v) => a + v, 0)
}
