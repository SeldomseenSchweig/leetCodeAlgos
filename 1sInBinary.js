// Runtime
// 77 ms
// Beats
// 74.97%
// Memory
// 42.3 MB
// Beats
// 77.38%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  */
var hammingWeight = function(n) {
    let res = n.toString(2).split('');
    let count = 0;
    for(let i = 0; i < res.length; i++){
        if(res[i] === '1'){
            count++
        }
    }
    return count
    
    
    
};