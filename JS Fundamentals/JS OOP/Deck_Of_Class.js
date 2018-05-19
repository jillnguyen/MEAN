class Deck{
    constructor(){
        this.cards = [];
        for (var j = 1; j<14; j++){
            if (j = 1){
                let val = "A";
                for (var x = 1; x < 5; x++){
                    if ( x == 1){
                        var temp = val;
                        temp += " Hearts";
                        this.cards.push(temp);
                    }
                    if ( x == 2){
                        var temp = val;
                        temp += " Diamonds";
                        this.cards.push(temp);
                    }
                    if ( x == 3){
                        var temp = val;
                        temp += " Clubs";
                        this.cards.push(temp);
                    }
                    if ( x == 4){
                        var temp = val;
                        temp += " Spades";
                        this.cards.push(temp);
                    }
                }
            }    
            if (j >= 2 && j < 11){
                let val = str(j); 
                for (var x = 1; x < 5; x++){
                    if ( x == 1){
                        var temp = val;
                        temp += " Hearts";
                        this.cards.push(temp);
                    }
                    if ( x == 2){
                        var temp = val;
                        temp += " Diamonds";
                        this.cards.push(temp);
                    }
                    if ( x == 3){
                        var temp = val;
                        temp += " Clubs";
                        this.cards.push(temp);
                    }
                    if ( x == 4){
                        var temp = val;
                        temp += " Spades";
                        this.cards.push(temp);
                    }
                }
            }
            
            if (j = 11){
                let val = "Jack";
                for (var x = 1; x < 5; x++){
                    if ( x == 1){
                        var temp = val;
                        temp += " Hearts";
                        this.cards.push(temp);
                    }
                    if ( x == 2){
                        var temp = val;
                        temp += " Diamonds";
                        this.cards.push(temp);
                    }
                    if ( x == 3){
                        var temp = val;
                        temp += " Clubs";
                        this.cards.push(temp);
                    }
                    if ( x == 4){
                        var temp = val;
                        temp += " Spades";
                        this.cards.push(temp);
                    }
                }
            }    
            if (j = 12){
                let val = "Queen";
                for (var x = 1; x < 5; x++){
                    if ( x = 1){
                        var temp = val;
                        temp += " Hearts";
                        this.cards.push(temp);
                    }
                    if ( x == 2){
                        var temp = val;
                        temp += " Diamonds";
                        this.cards.push(temp);
                    }
                    if ( x == 3){
                        var temp = val;
                        temp += " Clubs";
                        this.cards.push(temp);
                    }
                    if ( x == 4){
                        var temp = val;
                        temp += " Spades";
                        this.cards.push(temp);
                    }
                }
            }    
            if (j = 13){
                let val = "King";
                for (var x = 1; x < 5; x++){
                    if ( x == 1){
                        var temp = val;
                        temp += " Hearts";
                        this.cards.push(temp);
                    }
                    if ( x == 2){
                        var temp = val;
                        temp += " Diamonds";
                        this.cards.push(temp);
                    }
                    if ( x == 3){
                        var temp = val;
                        temp += " Clubs";
                        this.cards.push(temp);
                    }
                    if ( x == 4){
                        var temp = val;
                        temp += " Spades";
                        this.cards.push(temp);
                    }
                }
            }
        this.number = this.cards.length;
        }    
    }    
    showStats(){
        console.log("Number of cards: " + this.number + ". Cards included: " + this.cards);
        return this;
    }

    deal(){
        let idx = Math.floor(Math.random() * (this.cards.length - 1)) + 1;
        let randomCard = this.cards[idx];
        this.cards.splice(idx,1);
        this.number-= 1
        return randomCard;
    }
};    


class Player{
    constructor(name){
        var self = this;
        this._name = name;
        this.hand = [];
    }

    takeCard(deck){
        let cardTook = deck.deal();
        this.hand.push(cardTook);
        return this;
    }

    showHands(){
        let num = this.hand.length;
        console.log("Number of cards in hand: " + num + ". Cards in hand are: " + this.hand);
        return this;
    }

    discardCard(val){
        const idx = this.hand.indexOf(val); 
        cardDisposed = this.hand.splice(idx,1);
        return this;
    }
}


var deck1 = new Deck();
var player1 = new Player("Jill");
var player2 = new Player("Austin");

deck1.deal();
player1.takeCard(deck1).showHands();
deck1.showStats();
