const arr = ["hi","hey","nagpur","pune","Bike","train","Bullet","legendary","power","pikachu"];
let max = null;
let str = '';
const maxString = (arr) => {
    arr.forEach(function(e){
        if(e.length > max){
            max = e.length
            str = e
        }
    })
    return str;
}
console.log(maxString(arr))
