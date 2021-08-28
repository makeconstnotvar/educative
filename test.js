const Stack = require('./stack');

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const len = 20;
const items = new Array(len)
for (let i = 0; i < len; i++) {
  items[i] = getRandomArbitrary(0, 100);
}

const stack = new Stack(items)
stack.push(3)
stack.push(2)
stack.push(22)
stack.push(10)
stack.push(1)
stack.push(10)
let start = process.hrtime();
console.log(stack.min);
let stop = process.hrtime(start)
console.log(`Время: ${(stop[0] * 1e9 + stop[1]) / 1e9} сек`)

stack.log()
