const Stack = require('./stack');
function evaluatePostFix(exp) {
  const stack = new Stack(exp.split(''));
  const temp = new Stack();
  while (!stack.empty) {
    const val = stack.pop();
    if (!isNaN(parseInt(val))) {
      temp.push(val)
    } else {
      const val2 = temp.pop();
      const val1 = temp.pop();
      temp.push(eval(val1 + val + val2))
    }
  }
  return temp.pop();
}
let res = evaluatePostFix('921*-8-4+');
console.log(1)