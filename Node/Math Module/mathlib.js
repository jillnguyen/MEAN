
module.exports = function (){
    return {
      add: function(num1, num2) { 
          console.log("Sum is: ", num1 + num2);
      },
      multiply: function(num1, num2) {
          console.log("Multiplication is: ", num1 * num2);
      },
      square: function(num) {
          console.log("Square Value is: ", num * num);
      },
      random: function(num1, num2) {
          var rand = Math.floor(Math.random() * (num2- num1)) + num1;
          console.log("Random number is: ", rand);
      }
    }
  };