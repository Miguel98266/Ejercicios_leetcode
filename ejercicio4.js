// https://leetcode.com/problems/function-composition/description/
// var compose = function(functions) {
//     return function(x) {
//     if (functions.length === 0) {
//       return x;
//     } else {
//       var result = x;
//       for (var i = functions.length - 1; i >= 0; i--) {
//         console.log(functions[i])
//         result = functions[i](result);
//       }
//       return result;
//     }
//   }
// };
//  const fn = compose([x => x + 1, x => 2 * x])
//  console.log(fn(4)) // 9

const a = (x) => x + 1;
console.log(a(4));

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let result = x;
    if (functions == 0) {
      return result;
    } else {
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
        //   console.log(functions[i](result));
      }
    }
    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
