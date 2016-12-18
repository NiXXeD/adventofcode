const _ = require('lodash')
module.exports = (input, part2 = false) => {
    let parsed = input.join``.match(/(\d+)/g)
    let initialState = {
        player: {hp: 50, mana: 500, recharge: 0, shield: 0, ar: 0},
        boss: {hp: +parsed[0], dmg: +parsed[1], poison: 0},
        spent: 0, turns: 0
    }

    let lowest = Number.POSITIVE_INFINITY
    let queue = [initialState]
    while (queue.length) {
        let state = _.cloneDeep(queue.pop())
        let {player, boss, spent, turns, action} = state

        function effects() {
            if (player.shield > 0) {
                player.shield--
                if (!player.shield)
                    player.ar = 0
            }
            if (boss.poison > 0) {
                boss.poison--
                boss.hp -= 3
            }
            if (player.recharge > 0) {
                player.recharge--
                player.mana += 101
            }
            checkWin()
        }

        function checkWin() {
            // win condition
            if (boss.hp <= 0) {
                if (spent < lowest) {
                    lowest = spent
                    queue = queue.filter(q => q.spent < lowest)
                }
                boss.dead = true
            }

            // lose condition
            if (player.hp <= 0)
                player.dead = true
        }

        // perform action
        if (action) {
            // part2 hard mode
            if (part2 && player.hp-- === 0)
                player.dead = true

            // player turn
            effects()
            if (!player.dead) {
                if (action === 'magic-missile') {
                    boss.hp -= 4
                    player.mana -= 53
                } else if (action === 'drain') {
                    boss.hp -= 2
                    player.hp += 2
                    player.mana -= 73
                } else if (action === 'shield') {
                    player.ar = 7
                    player.shield = 6
                    player.mana -= 113
                } else if (action === 'poison') {
                    boss.poison = 6
                    player.mana -= 173
                } else if (action === 'recharge') {
                    player.recharge = 5
                    player.mana -= 229
                }

                // boss turn
                effects()
                if (!boss.dead) {
                    player.hp -= Math.max(boss.dmg - player.ar, 1)
                }
                checkWin()
            }
        }

        // next action
        if (!player.dead && !boss.dead) {
            const cast = (spell, cost) => {
                if (player.mana >= cost && spent + cost < lowest) {
                    queue.unshift({player, boss, spent: spent + cost, turns: turns + 1, action: spell})
                }
            }
            if (player.recharge <= 1) cast('recharge', 229)
            if (boss.poison <= 1) cast('poison', 173)
            if (player.shield <= 1) cast('shield', 113)
            if (part2) cast('drain', 73)
            cast('magic-missile', 53)
        }

        // prioritize cheaper spending
        queue = queue.sort((a, b) => a.spent - b.spent)
    }

    return lowest
}
