const Stack = require('./stack');

function isBalanced(exp) {

  const vocab = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  let arr = exp.split('');
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (vocab[stack.last] == x && !stack.empty)
      stack.pop();
    else
      stack.push(x);
  }
  stack.log();
  return stack.empty;
}

console.log(isBalanced('({})]()]{}'))