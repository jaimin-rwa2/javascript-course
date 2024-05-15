/*
? Global Scope 
?   Module Scope : to group function and mogule level functions
?       Function Scope : for var
?           Block Scope : let and const
*/

// fightModule : this is still global variable
const fightModule = ( 
    function() {
        // window.alert("We can access globle varialbe here")
        
        // we can not access this variable globally
        let _hero = "Herry poter" 
        let _vilen = "lord voldemord"
        
        function fight(hero=_hero, vilen=_vilen) {
            let heroAttack = Math.floor(Math.random() * 10)
            let vilenAttack = Math.floor(Math.random() * 10)
            console.log(`${hero} get's ${vilenAttack} demage & ${vilen} get's ${heroAttack} demage`)
            let result = heroAttack > vilenAttack ? `${hero} wins` : `${vilen} wins`
            return result
        }

        return {
            fight: fight // we can access only shared or retured variables
        }
    }
)() // IIFE

console.log(fightModule.fight())

