console.log("String Palindrome")
console.log("=================")
let str="racecar"
var temp=""
console.log("Input Word: "+str)
let length=str.length
for(i=length-1;i>=0;i--){
    temp = temp + str.charAt(i)
    //console.log(temp)
}
console.log("Reverse Word:"+ temp)
if(str===temp){
    console.log("The Given String is Palindrome")
}
else{
    console.log("The Given String is not a Palindrome")
}