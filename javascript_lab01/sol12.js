const arr1 = [1,2,3,10,11,5,6]
const arr2 = [1,3,5,7,9,15,6,11]
let newArr = []

for(let i=0;i<arr1.length;i++){
    let ele = arr1[i];
    if(arr2.includes(ele) && !newArr.includes(ele)){
        newArr.push(ele);
    }
}
console.log(newArr)

