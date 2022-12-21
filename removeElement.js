// Runtime
// 89 ms
// Beats
// 83.15%
// Memory
// 44.5 MB
// Beats
// 79.71%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let j = 1
    let count = 1
    while(j < nums.length){
        if(nums[i] != nums[j] ){
            nums[i+1] = nums[j]
            count++
            j++
            i++
        }else{
            j++
        }
    }
    return count
};