console.log("To find Pair of Indices")
console.log("-----------------------")

let arr1=[]
const nums=[2,4,7,8,11,14]
const target=18

for(i=0;i<=nums.length-1;i++){
    for(j=0;j<=nums.length-1;j++){
        if(target==nums[i]+nums[j]){
            //console.log("("+nums[i]+","+nums[j]+")")
            let k= nums[i]+"+" +nums[j]+" ("+i+","+j+")"
            //console.log(k)
            //console.log("("+i+","+j+")")
            arr1.push(k)
        }
    }
}
console.log(arr1)