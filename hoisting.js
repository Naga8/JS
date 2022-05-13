//Hoisting

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable; //not works in let

//HOF

// function higherOrder2() {
//       return function() {
//       return "Do something";
//     }
//   }
          
//   var x = higherOrder2();
//   console.log(x()) // Returns "Do something"