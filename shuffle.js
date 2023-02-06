// Runtime
// 65 ms
// Beats
// 94.81%
// Memory
// 43.4 MB
// Beats
// 99.69%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} nums
//  * @param {number} n
//  * @return {number[]}
//  */
var shuffle = function(nums, n) {
    let s = nums.slice(n)
    let f = nums.slice(0,n)
    let res = []
    for(let i = 0; i < s.length; i++){
        res.push(f[i])
        res.push(s[i])

    }
    return res
    
    
};