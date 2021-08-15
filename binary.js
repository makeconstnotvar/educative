const Stack = require("./stack");
const Queue = require("./queue");

function findBin(n) {
  const q = new Stack();
  let bin = '';
  while (n > 0) {
    q.push(n%2)
    n = Math.floor(n / 2)
  }
  console.log(q.data.join(' | '))
  while (!q.empty) {
    bin += q.pop();
  }
  return bin;
}


  console.log(findBin(4))
