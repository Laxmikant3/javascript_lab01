const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number: ",function(num){
    if(num%2 == 0){
        console.log(`${num} is EVEN`)
    }
    else{
        console.log(`${num} is ODD`)
    }
    rl.close();
})