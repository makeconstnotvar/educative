const Stack = require("./stack");
const Queue = require("./queue");

function findBin1(n) {
  const stack = new Stack();
  let bin = '';
  while (n > 0) {
    stack.push(n % 2)
    n = Math.floor(n / 2)
  }
  while (!stack.empty) {
    bin += stack.pop();
  }
  return bin;
}


//console.log(findBin1(10))


function findBin2(n) {
  let result = [];
  let queue = new Queue();
  let s1, s2;
  queue.push("1");
  for (let i = 0; i < n; i++) {
    let x = queue.shift()
    result.push(x);
    s1 = result[i] + "0";
    s2 = result[i] + "1";

    queue.push(s1);
    queue.push(s2);
  }

  return result;
}

//console.log(findBin2(10))

function reverseK(queue, k) {
  const stack = new Stack();
  let count = 0
  while (count < k) {
    stack.push(queue.shift());
    count++
  }
  while (!stack.empty) {
    queue.push(stack.pop())
  }
  while (count < queue.size) {
    queue.push(queue.shift());
    count++
  }
  console.log(queue.data)
}

let queue = new Queue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
reverseK(queue, 5);