// Runtime
// 77 ms
// Beats
// 75.5%
// Memory
// 43.3 MB
// Beats
// 66.63%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} n
//  * @return {boolean}
//  */
var isPowerOfTwo = function(n) {
    
    if(n === 1) return true
    if(Math.floor(n) === 0) return false
    return isPowerOfTwo(n/2)
};