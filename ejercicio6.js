// https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/945294355/
var map = function(arr, fn) {
    list=[]
    for (let i = 0; i < arr.length; i++) {
        list.push(fn(arr[i],i))
        
    }
    return list
};

arr = [10,20,30] 
fn = function constant() { return 42; }
console.log(map(arr,fn))