// Runtime
// 106 ms
// Beats
// 45.69%
// Memory
// 44 MB
// Beats
// 61.59%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} n
//  * @return {number}
//  */
var arrangeCoins = function(n) {
    let count = 0
    let goal = n
    
    for(let i = 1; i < n+1; i++){
        let dif = goal - i
        count++
        if(i+1 > dif) return count
         goal = goal - i
    }

    return count
    
};