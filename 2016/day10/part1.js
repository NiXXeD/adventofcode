module.exports = (input, part = 1) => {
    let output = {}

    let bots = input
        .filter(value => /^bo/.test(value))
        .map(str => str.match(/(\d+).*?(output|bot) (\d+).*?(output|bot) (\d+)/))
        .map(matches => ({
            bot: +matches[1],
            low: {
                dest: matches[2],
                value: +matches[3]
            },
            high: {
                dest: matches[4],
                value: +matches[5]
            },
            data: []
        }))
        .map(bot => Object.assign(bot, {
            process(input) {
                bot.data.push(input)

                if (bot.data.length == 2) {
                    let low = Math.min(...bot.data)
                    let high = Math.max(...bot.data)

                    bot.low.chip = low
                    bot.high.chip = high
                    bot.low.dest === 'output' ? output[bot.low.value] = low : bots[bot.low.value].process(low)
                    bot.high.dest === 'output' ? output[bot.high.value] = high : bots[bot.high.value].process(high)
                }
            }
        }))
        .sort((a, b) => a.bot - b.bot)

    input.filter(value => /^va/.test(value))
        .map(str => str.match(/(\d+)/g))
        .map(matches => ({
            value: +matches[0],
            bot: +matches[1]
        }))
        .forEach(value => {
            bots[value.bot].process(value.value)
        })

    if (part === 1) {
        return bots.find(bot => bot.low.chip === 17 && bot.high.chip === 61).bot
    }
    return output[0] * output[1] * output[2]
}
