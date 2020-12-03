const Calculator = function(arr) {
    // do code here
    // for (let i = 0; i < a) 
    if (arr.length == 0) {
      for (let i = 0; i < arr.length; i++) {
        display += (' ' + arr[i]) 
      }
      result = arr[0] 

      for (let i = 1; i < arr.length; i++){
        if (typeof arr[i] != 'number') {
          return 'harus ada number'
        }
      }
    }
    
  };

// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 127)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 *  5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);