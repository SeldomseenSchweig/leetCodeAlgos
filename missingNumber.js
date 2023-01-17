// Runtime
// 62 ms
// Beats
// 97.1%
// Memory
// 43.4 MB
// Beats
// 99.51%
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
var missingNumber = function(nums) {
     let sum = nums.reduce((partialSum, a) => partialSum + a, 0)
     let sum2 = 0
     for(let  i = 1; i < nums.length+1; i++){
         sum2+=i
     }
    return  sum2 - sum
};