const Calculator = function(arr) {
    // do code here
    
    return eval(arr);
    
  };

// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate('127'), 127)
Test(calculate('2 + 3'), 5);
Test(calculate('2 - 3 - 4'), -5);
Test(calculate('10 *  5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);