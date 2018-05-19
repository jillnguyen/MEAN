class Ninja{
    constructor(name){
        var self = this;
        this._name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        return this._name;
    }

    showStats(){
        console.log("Name: "+ this._name + ". Health: "+ this.health + ". Speed: "+ this.speed + ". Strength: "+ this.strength);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
const ninjaBig = new Ninja("DragonW");

superSensei.speakWisdom();

superSensei.showStats();
ninjaBig.drinkSake().showStats();