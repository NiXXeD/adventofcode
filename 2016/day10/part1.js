module.exports = (input, part = 1) => {
    let out = {}, process = (bot, input) => (bot.data.push(input) == 2) && (bot.low(Math.min(...bot.data)), bot.high(Math.max(...bot.data))),
        bots = input.filter(value => /^bo/.test(value))
            .map(str => str.match(/(\d+).*?(output|bot) (\d+).*?(output|bot) (\d+)/))
            .map(([, bot, lt, lv, ht, hv]) => ({
                bot: +bot, data: [], lt, lv, ht, hv,
                low: chip => lt[0] === 'o' ? out[+lv] = chip : process(bots[+lv], chip),
                high: chip => ht[0] === 'o' ? out[+hv] = chip : process(bots[+hv], chip)
            })).sort((a, b) => a.bot - b.bot)
    input.filter(value => /^va/.test(value)).map(str => str.match(/(\d+)/g)).forEach(([b, v]) => process(bots[+v], +b))
    return part === 1 ? bots.find(bot => bot.data.includes(17) && bot.data.includes(61)).bot : out[0] * out[1] * out[2]
}
