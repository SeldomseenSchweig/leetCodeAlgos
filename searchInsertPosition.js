// Runtime
// 70 ms
// Beats
// 80.64%
// Memory
// 42.3 MB
// Beats
// 46.91%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if(nums.indexOf(target) >0){
        
        return nums.indexOf(target)
    }else{
        for(let i = 0; i < nums.length; i++){
            if(nums[nums.length-1] < target) return nums.length
            if(nums[i] < target && nums[i+1] > target) return i+1
            if(nums[0]>= target) return 0
             
        }

    }
     
    
};