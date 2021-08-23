const Stack = require('./stack');

function nextGreaterElement(arr) {
  const stack = new Stack();
  let i = 0, j = 0;
  while (i < arr.length) {
    const fast = arr[i];
    const slow = arr[j];
    if (fast > slow) {
      while (j < i) {
        stack.push(fast);
        j++
      }
    }
    i++;
  }
  while (stack.size < arr.length) {
    stack.push(-1)
  }
  stack.log();
}

nextGreaterElement([4, 6, 3, 2, 8, 1])