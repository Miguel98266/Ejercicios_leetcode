/** https://leetcode.com/problems/allow-one-function-call/description/
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let isActive = true;
  return function (...args) {
    if (isActive) {
        isActive = false;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3))
console.log(onceFn(2, 3, 6))
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
