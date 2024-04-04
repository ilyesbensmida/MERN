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
class Sensei extends Ninja {
    constructor (name,wisdom=10){
        super(name);
        this.wisdom=wisdom
        this.speed=10
        this.health=200
        this.strength=10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("the clothes does not make the monk")
    }
}

const superSensei = new Sensei("Master-Splinter");
superSensei.speakWisdom();
superSensei.showStats();