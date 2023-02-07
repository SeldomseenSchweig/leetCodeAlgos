// Runtime
// 109 ms
// Beats
// 92.11%
// Memory
// 55.6 MB
// Beats
// 84.79%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} candyType
//  * @return {number}
//  */
var distributeCandies = function(candyType) {
    let c = candyType.length/2;
    let set = new Set(candyType)
    if(set.size === 1) return 1
    if(set.size >= c) return c
    if( c > set.size) return set.size
    
};