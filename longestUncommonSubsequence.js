// Runtime
// 64 ms
// Beats
// 65.49%
// Memory
// 42.1 MB
// Beats
// 7.75%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {number}
//  */
var findLUSlength = function(a, b) {
    if(a === b) return -1
    return a.length >= b.length ?  a.length : b.length

    
};