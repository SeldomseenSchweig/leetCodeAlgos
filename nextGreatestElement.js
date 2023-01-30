// Runtime
// 80 ms
// Beats
// 49.43%
// Memory
// 44.1 MB
// Beats
// 47.82%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let num of nums1)
    {
        let flag=-1;
        for(let i=nums2.indexOf(num)+1;i<nums2.length;i++)
        {
            if(nums2[i]>num)
            {
                flag=nums2[i];
                break;
            }
        }
        result.push(flag);
    }
    return result;
};