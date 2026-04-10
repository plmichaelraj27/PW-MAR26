console.log("To Compute Intersection of two arrays")
console.log("-------------------------------------")

const arr1=[2,3,4,5,6,8]
const arr2=[3,6,8,9,7,2]
let arr3=[]
function intersection(arr1,arr2){
    for (const element1 of arr1){
        for(const element2 of arr2){
            if(element1==element2){
                //console.log(element1)
                arr3.push(element2)
                break
            }

        }
    }
}
intersection(arr1,arr2)
console.log("Array 1 Values: "+arr1)
console.log("Array 2 Values: "+arr1)
console.log("Intersection Array: "+arr3)