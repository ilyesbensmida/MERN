class Ninja {
    constructor (name){
        this.name=name
        this.speed=3
        this.strength=3
        this.health=90
    }
    sayName(){
        console.log(this.name)
    }
    drinkSake(){
        this.health+=10
    }
    showStats(){
        console.log(this)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();