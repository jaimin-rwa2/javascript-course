const wizard = {
    name: "Gunjan",
    health: 50,
    heal(extra){
        if (extra > 10){
            return this.health += extra
        }
        if (this.health <= 60){
            return this.health += 10
        }
        return this.health
    }
}

const archer = {
    name: "Jaimin",
    health: 30
}

console.log(1, archer)
const bind_value = wizard.heal.bind(archer, 70)
console.log(1, archer)
wizard.heal.call(archer, 70)
wizard.heal.apply(archer, [70])
console.log(2, archer)
bind_value()
console.log(3, archer)