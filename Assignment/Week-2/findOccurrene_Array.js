console.log("Find Occurrence in Array")
console.log("------------------------")

const nums=[2,4,5,2,1,2]
let count=0
const k=2
//const k=7

for(i=0;i<=nums.length-1;i++){
    if(k===nums[i]){
        count++
    }
}
console.log("Given Number: "+k)
console.log("No of Occurrence in array: "+count)
