// Runtime
// 121 ms
// Beats
// 74.96%
// Memory
// 50.9 MB
// Beats
// 46.24%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set

    for(let num of nums){
        if(set.has(num)){
            return true
        }else{
            set.add(num)
        }
    }
    return false
    
};