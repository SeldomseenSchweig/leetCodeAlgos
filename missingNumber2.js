// Runtime
// 80 ms
// Beats
// 82.53%
// Memory
// 51.9 MB
// Beats
// 7.88%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var findErrorNums = function(nums) {
    let res = []
    let dub = {}
    let set = new Set(nums)
    for(let i = 1; i < nums.length+1; i++){
        if(!set.has(i)){
            console.log(i)
            res.push(i)
        }
    }
    for(let i = 0; i < nums.length;i++){
        if(dub[nums[i]] === 1){ 
            res.unshift(nums[i])
            }else {
                dub[nums[i]] = 1
                }
    }
    

    return res
};