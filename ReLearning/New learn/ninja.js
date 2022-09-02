class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`My name is ${this.name} nice to meet you my stats are `)
    }
    showStats() {
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10
    }
}

const ninja1 = new Ninja("Tristen", 100, 3, 3)
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()





