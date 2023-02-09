// Runtime
// 130 ms
// Beats
// 34.83%
// Memory
// 47 MB
// Beats
// 25.47%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maximumProduct = function(nums) {
    
nums = nums.sort((a,b)=>a-b)
let len = nums.length-1
let ans1 = nums[len] * nums[len-1] * nums[len-2]
let ans2 = nums[len] * nums[1] * nums[0]

return Math.max(ans1,ans2)
}