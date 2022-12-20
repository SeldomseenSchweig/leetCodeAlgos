// Runtime
// 187 ms
// Beats
// 84.27%
// Memory
// 51.7 MB
// Beats
// 19.36%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let backwardsX  = x.toString().split("").reverse().join("")
     let stringX = x.toString()
     return stringX === backwardsX

     
    
};