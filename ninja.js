class Ninja1 {
    constructor(health, speed, strength, name) {
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.name = name;
    }
    sayName() {
        console.log([this.name])
    }
    showStats() {
        console.log("health: ", this.health)
        console.log("speed: ", this.speed)
        console.log("strength: ", this.strength)
        console.log("name: ", this.name)
    }

    addHealth() {
        this.health += 10;
    }
}
