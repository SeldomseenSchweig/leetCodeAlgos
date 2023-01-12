

// Details
// Solution
// JavaScript
// Runtime
// 86 ms
// Beats
// 72.60%
// Memory
// 46.4 MB
// Beats
// 41.86%
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
var singleNumber = function(nums) {
    let map = {}

    for(let i = 0; i < nums.length; i ++){
        if(map[nums[i]] === 1){
            delete map[nums[i]]
        }else if(map[nums[i]] !==1 ){
            map[nums[i]] = 1
        }
    }
    let values = Object.keys(map)
    console.log(values)
    return values[0]
};