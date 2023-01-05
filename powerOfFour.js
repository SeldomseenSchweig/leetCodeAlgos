// Runtime
// 112 ms
// Beats
// 41.3%
// Memory
// 43.7 MB
// Beats
// 35.5%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n===1) return true
    if(n < 4) return false
    return isPowerOfFour(n/4)
    
    
};