module.exports = (input, part = 1) => {
    let output = {}
    let bots = input
        .filter(value => /^bo/.test(value))
        .map(str => str.match(/(\d+).*?(output|bot) (\d+).*?(output|bot) (\d+)/))
        .map(matches => ({
            bot: +matches[1],
            data: [],
            low: chip => matches[2] === 'output' ? output[+matches[3]] = chip : bots[+matches[3]].process(chip),
            high: chip => matches[4] === 'output' ? output[+matches[5]] = chip : bots[+matches[5]].process(chip)
        }))
        .map(bot => Object.assign(bot, {
            process(input) {
                bot.data.push(input)

                if (bot.data.length == 2) {
                    bot.low(Math.min(...bot.data))
                    bot.high(Math.max(...bot.data))
                }
            }
        }))
        .sort((a, b) => a.bot - b.bot)

    input.filter(value => /^va/.test(value))
        .map(str => str.match(/(\d+)/g))
        .forEach(matches => bots[+matches[1]].process(+matches[0]))

    if (part === 1) {
        return bots.find(bot => bot.data.includes(17) && bot.data.includes(61)).bot
    }
    return output[0] * output[1] * output[2]
}
