// Runtime
// 488 ms
// Beats
// 17.55%
// Memory
// 52.6 MB
// Beats
// 5.40%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
var isPerfectSquare = function(num) {
    if(num===1) return true
    
    for(let i = 0; i < num/2+1; i++){
        console.log(i)
        if(i*i === num) return true
        if(i*i > num) return false
    }
    
    
    
};