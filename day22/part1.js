module.exports = input => {
    var player = {hp: 50, mana: 500, ar: 0}
    var boss = input.join``.match(/(\d+)/g).map(Number)
    boss = {hp: boss[0], dmg: boss[1]}

    var turns = 0
    var spent = 0
    while (boss.hp > 0 && player.hp > 0) {
        //effects
        if (player.shield > 0) {
            player.shield--
            if (!player.shield) player.ar = 0
        }
        if (boss.poison > 0) {
            boss.poison--
            boss.hp -= 3
        }
        if (player.recharge > 0) {
            player.recharge--
            player.mana += 101
        }
        
        var cast = (spell, cost) => {
            console.log(spell, player, boss)
            spent += cost
            player.mana -= cost
        }

        if (turns % 2) {
            if (boss.hp > 0) {
                //boss turn
                player.hp -= Math.max(boss.dmg - player.ar, 1)
                console.log('Boss turn', player, boss)
            }
        } else {
            //player turn
            if (!boss.poison && player.mana >= 173 && boss.hp > 18) {
                cast('Poison', 173)
                boss.poison = 6
            } else if (!player.hasOwnProperty('recharge')) {
                cast('Recharge', 229)
                player.recharge = 5
            } else if (!player.hasOwnProperty('shield')) {
                cast('Shield', 113)
                player.ar = 7
                player.shield = 6
            } else if (player.mana >= 53) {
                cast('Missile', 53)
                boss.hp -= 4
            }
        }

        turns++
    }

    return spent
}
