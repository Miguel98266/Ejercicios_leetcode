/** https://leetcode.com/problems/counter-ii/description/
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;
  function increment() {
    return ++currentValue;
  }
  function decrement() {
    return --currentValue;
  }
  function reset() {
    return currentValue=init;
  }
  return { increment, decrement, reset };
};

const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());


