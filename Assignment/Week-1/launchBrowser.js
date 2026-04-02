console.log("Launch Browser")
console.log("--------------")

//let browser="Chrome"

//console.log("Print Browser")
function browserName(browser){
    if(browser=="Chrome"){
        console.log(browser+" has Lauched")
    }
    else if(browser=="Firefox"){
        console.log(browser+" has Lauched")
    }
    else if(browser=="Edge"){
        console.log(browser+" has Lauched")
    }
    else if(browser=="Safari"){
        console.log(browser+ " has Launched")
    }
    else{
        console.log("Invalid Browser")
    }
}
browserName("Firefox")
//browserName("Edge")

function testType(type){
    switch(true){
        case "Smoke":console.log("Smoke Testing")
        break
        case "Sanity": console.log("Sanity Testing")
        break
        case "Regression" : console.log("Regression Testing")
        break
        default: console.log("SmokeTesting")
    }
}
testType("Others")