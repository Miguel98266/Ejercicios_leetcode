/** https://leetcode.com/problems/filter-elements-from-array/submissions/945290381/
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    arrAux=[]
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i],i) && arrAux.push(arr[i])
    }
    console.log(arrAux)
    return arrAux
};

arr = [0,10,20,30], 
fn = function greaterThan10(n) { return n > 10; }
// arr = [1,2,3] 
// fn = function firstIndex(n, i) { return i === 0; }
console.log(fn(arr))
// console.log(filter(arr,fn))


