function Ninja(name){
    var self = this;
    this.name = name;
    var health = 100;
    const speed = 3;
    var strength = 3;
    
    this.drinkSake = function(){
        health += 10;
        return this;
    };

    this.sayName = function(){
        console.log("Name is: "+ name);
    };

    this.showStats = function(){
        console.log("Name: "+ name + ". Health: " + health + ". Speed: " + speed + ". Strength: " + strength);
    };

    this.changeHealth = function(num){
        health += num;
        return this
    }

    this.punch = function(obj){
        obj.changeHealth(-5)
        strength += 1;
        return this;
    }

    this.kick = function(obj){
        obj.changeHealth(-15);
        return this;
    }

};


var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake().drinkSake();
ninja1.showStats();

var ninja2 = new Ninja("Bill Gates");
ninja2.sayName();


ninja1.kick(ninja2).kick(ninja2).showStats();
ninja2.punch(ninja1).showStats();
