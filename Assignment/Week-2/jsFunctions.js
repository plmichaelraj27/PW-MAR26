console.log("Task1: Function Declaration")
console.log("---------------------------")
function userProfile(name){
    console.log("Hello "+name)
}
userProfile("Michael")
console.log("Task 2: Arrow Function")
console.log("-----------------------")
let double = x => {
    return x*2;
}
console.log(double(9))

console.log("Task 3: Anonymous Function ")
console.log("---------------------------")
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
},2000)
//setTimeout()

console.log("Task 4: Callback Function")
console.log("-------------------------")

function getUserData(callback){
    setTimeout(function() {
        console.log("Calling Timeout function")
        let user ={
            name : "Michael",
            age : 32
        }   
    callback(user);
    },3000)
}
getUserData(function(user){
    console.log("UserName: ",user.name)
    console.log("User Age: ", user.age)

    })

