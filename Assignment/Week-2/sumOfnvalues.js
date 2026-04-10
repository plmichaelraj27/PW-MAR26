console.log("Sum of numbers from 1 to a given n")
console.log("----------------------------------")
const readline = require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number:", function(num){
    let n=Number(num)
    //console.log("Entered Number :", n)
    let sum=0
    for(i=1;i<=n;i++){
        sum=sum+i
    }
    console.log("Sum of Numbers from 1 to "+n+ " is "+sum)
    r1.close();
});

