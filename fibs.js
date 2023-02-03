// Runtime
// 58 ms
// Beats
// 92.54%
// Memory
// 43.5 MB
// Beats
// 5.63%
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
var fib = function(n) {
    if(n===0) return 0
    if(n===1) return 1
    let nums = [0,1]
    for(let i = 0; i < n; i++){
        let sum = 0
        console.log(i, i+1)
        sum = nums[i] + nums[i+1]
        nums.push(sum);
    }
    return nums[n-1] + nums[n-2]

    
};