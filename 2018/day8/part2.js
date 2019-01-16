module.exports = input => {
    let split = input.split` `.map(i => +i)

    let parseNode = data => {
        let childCount = data.shift()
        let metaCount = data.shift()

        let remainder = data
        let childValues = []
        for (let i = 0; i < childCount; i++) {
            let result = parseNode(remainder)
            remainder = result.remainder
            childValues.push(result.value)
        }

        let metadata = []
        if (metaCount) {
            metadata = remainder.splice(0, metaCount)
        }

        let value
        if (childValues.length) {
            value = metadata.reduce((a, v) => a + ((v > 0 && childValues.length >= v) ? childValues[v - 1] : 0), 0)
        } else {
            value = metadata.reduce((a, v) => a + v, 0)
        }

        return {remainder, value}
    }

    let {value} = parseNode(split)
    return value
}
