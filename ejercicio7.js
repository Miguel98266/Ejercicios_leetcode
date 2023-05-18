/** https://leetcode.com/problems/promise-time-limit/description/
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t);
            resolve(`resolved: ${fn()} , time ${t}`)
        })
    }
};


var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args).then(resolve, reject);
        });
    }
};

 const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 console.log(limited(150).then())
 limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 