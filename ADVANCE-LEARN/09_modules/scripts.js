let _hero = "Herry poter"
let _vilen = "lord voldemord"

function fight(hero=_hero, vilen=_vilen) {
    let heroAttack = Math.floor(Math.random() * 10)
    let vilenAttack = Math.floor(Math.random() * 10)
    console.log(`${hero} get's ${vilenAttack} demage & ${vilen} get's ${heroAttack} demage`)
    result = heroAttack > vilenAttack ? `${hero} wins` : `${vilen} wins`
    return result
}

// console.log(fight(hero, vilen))
import jaimin from './modulex.js';
console.log(jaimin())

