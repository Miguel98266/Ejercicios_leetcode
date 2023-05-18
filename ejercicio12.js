/** https://leetcode.com/problems/chunk-array/
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let newArray = [];
  if (size == 0) {
    return [];
  } else {
    for (let i = 0; i <= arr.length; i += size) {
      console.log(i, i + size);
      newArray.push(arr.slice(i, i + size));
    }
    return newArray.filter((array) => array != "");
  }
};

arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(0,3))
size = 0;
console.log(chunk(arr, size));

// Output: [[1],[2],[3],[4],[5]]
