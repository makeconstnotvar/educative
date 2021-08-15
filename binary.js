const Stack = require("./stack");
const Queue = require("./queue");

function findBin1(n) {
  const q = new Stack();
  let bin = '';
  while (n > 0) {
    q.push(n % 2)
    n = Math.floor(n / 2)
  }
  while (!q.empty) {
    bin += q.pop();
  }
  return bin;
}


console.log(findBin1(10))


function findBin2(n) {
  let result = [];
  let q = new Queue();
  let s1, s2;
  q.push("1");
  for (let i = 0; i < n; i++) {
    let x = q.pop()
    result.push(x);
    s1 = result[i] + "0";
    s2 = result[i] + "1";

    q.push(s1);
    q.push(s2);
  }

  return result;
}

console.log(findBin2(10))