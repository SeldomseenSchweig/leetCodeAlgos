// Runtime
// 118 ms
// Beats
// 70.83%
// Memory
// 53.2 MB
// Beats
// 23.80%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var findDisappearedNumbers = function(nums) {
    let res = [];
    let length = nums.length
    let numSet = new Set(nums)
    for(let i = 1; i <length+1; i++){
        if(!numSet.has(i)) res.push(i)
    }

    return res  
};