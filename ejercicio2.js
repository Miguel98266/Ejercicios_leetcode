/** https://leetcode.com/problems/palindrome-number/description/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('')==x

};

isPalindrome(122)