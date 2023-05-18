//https://leetcode.com/problems/array-prototype-last
Array.prototype.last = function() {
    return this.length>0 ? this[this.length-1] :-1
  
};


 const arr = [1, 2, 3,4,5];
 arr.last(); // 3
 console.log(arr.last()); // 3
 