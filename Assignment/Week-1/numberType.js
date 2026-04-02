console.log("Find the Given number is positive or negative")
console.log("============================================")
//let num=0
//let num=-2939.93
//let num=438

function checkNum(num) 
{
    if(num>0){
    console.log("The Given number " + num + " is Positive")
}
else if(num<0){
    console.log("The Given number "+num+" is Negative")

}
else {
    console.log("The Given number "+num+" is Nutral")
}

}
checkNum(34.45)
checkNum(-4938)
checkNum(0)
