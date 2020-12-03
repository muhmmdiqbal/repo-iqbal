function reverseMyName(str) {
    // put your code here
    
    let hurufBaru = "";
    for (let i = str.length - 1; i >= 0; i--){
        hurufBaru += str[i];
    } 
    return hurufBaru;
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")

