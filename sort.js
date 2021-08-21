const Stack = require("./stack");

function sort1(stack) {
  const temp = new Stack();
  let val;
  while (!stack.empty) {
    val = stack.pop();

    while (!temp.empty && temp.last > val) {
      stack.push(temp.pop());
      //temp.pop();
    }

    temp.push(val);
  }

  return temp;
}

function sort2(stack) {
  if (!stack.empty) {
    const val = stack.pop();
    sort2(stack);
    insert(stack, val);
  }

  function insert(stack, val) {
    if (stack.empty || val < stack.last) {
      stack.push(val);
    } else {
      const temp = stack.pop();
      insert(stack, val);
      stack.push(temp);
    }
  }

  return stack
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const len = 1000;
const items = new Array(len)
for (let i = 0; i < len; i++) {
  items[i] = getRandomArbitrary(0, 100);
}
//const stack = new Stack([1, 3, 2]);
//const stack = new Stack([1, 3, 2, 5, 5, 16, 4, 18, 19, 19]);
const stack = new Stack(items);

let start = process.hrtime();
const sorted = sort1(stack);
let stop = process.hrtime(start)
console.log(`Время: ${(stop[0] * 1e9 + stop[1]) / 1e9} сек`)
//console.log(sorted.data);
