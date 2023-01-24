// Runtime
// 74 ms
// Beats
// 59.39%
// Memory
// 44 MB
// Beats
// 60.91%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var thirdMax = function(nums) {
    let set = new Set(nums)
    let res = Array.from(set).sort((a,b) => a - b)
    console.log(res)
    if(res.length === 2) return res[1]
    if(res.length === 1) return res[0]
    return res[res.length-3]

    
};