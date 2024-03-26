const maths = require('./maths.js');

const num1 = 8;
const num2 = 4;

const sum = maths.add(num1, num2);
const diff = maths.sub(num1, num2);
const prod = maths.mul(num1, num2);
const quo = maths.div(num1, num2);

console.log(`Sum is ${sum}`);
console.log(`Difference is ${diff}`);
console.log(`Product is ${prod}`);
console.log(`Quotient is ${quo}`);