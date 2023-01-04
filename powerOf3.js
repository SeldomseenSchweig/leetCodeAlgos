// Runtime
// 225 ms
// Beats
// 74.72%
// Memory
// 51.6 MB
// Beats
// 20.87%
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
var isPowerOfThree = function(n) {
    if(n === 1 ) return true
    if(n === 3){
        return true
    }else if(n < 9){
        return false
    }else{
        return isPowerOfThree(n/3)
    }
    
};