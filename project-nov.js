



    class Calculator {
        constructor() {
          this.PI = Math.PI;
          this.E = Math.E;
        }
      
        ratio(x, y, width) {
          return (y / x) * width;
        }
      
        percentage(x, y) {
          if (y === 0) {
            return 'Error: Divisor cannot be zero';
          }
          return ((x / y) * 100).toFixed(2) + '%';
        }
      
        add(x, y) {
          return x + y;
        }
      
        subtract(x, y) {
          return y - x;
        }
      
        multiply(x, y) {
          return x * y;
        }
      
        divide(x, y) {
          if (y === 0) {
            return 'Error: Divisor cannot be zero';
          }
          return x / y;
        }
      
        remainder(x, y) {
          if (y === 0) {
            return 'Error: Divisor cannot be zero';
          }
          return x % y;
        }
      
        elevate(x, y) {
          return Math.pow(x, y);
        }
      
        sqrt(x) {
          if (x < 0) {
            return 'Error: Cannot calculate the square root of a negative number';
          }
          return Math.sqrt(x);
        }
      }
      
      
      const calculator = new Calculator();
      


console.log(calculator.ratio(5, 7, 300)); // 420
console.log(calculator.percentage(3, 12)); // 25%
console.log(calculator.add(5, 7)); // 12
console.log(calculator.subtract(5, 7)); // 2
console.log(calculator.multiply(5, 7)); // 35
console.log(calculator.divide(35, 7)); // 5
console.log(calculator.remainder(7, 5)); // 2
console.log(calculator.elevate(5, 3)); // 125
console.log(calculator.sqrt(25)); // 5