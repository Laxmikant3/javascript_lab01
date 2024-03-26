const arr = [1,2,2,3,3,4,5,5,5,6]
const newArr = arr.reduce((acc,val) => {
    if(!acc.includes(val)){
        acc.push(val)
    }
    return acc;
}, [])
console.log(newArr); 

