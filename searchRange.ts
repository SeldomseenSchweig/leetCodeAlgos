// hayduke415
// Jul 10, 2023 15:27
// Details
// Solution
// TypeScript
// Runtime
// 81 ms
// Beats
// 5.74%
// Memory
// 45.3 MB
// Beats
// 20.85%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
function searchRange(nums: number[], target: number): number[] {

    let length = nums.length;
    let center;
    if(nums.length === 1 && nums[0] === target) return [0,0]
    if(length % 2 ===0){
        center = length / 2
    }else{
         center = Math.floor(length /2)
    }
    let res = []

    let right = length
    let left = 0
    while(left <= right){
        console.log(nums[center], center)
        if(nums[center] === target ){
            res.push(center)
            let newRight = center +1
            while(nums[newRight] == target){
                res.push(newRight)
                newRight++
                }
            let newLeft = center-1
            while(nums[newLeft] === target){
                res.unshift(newLeft)
                newLeft--
                }
            return [res[0], res[res.length-1]]
        }


            
        if(nums[center] < target){
            left = center
            left++
            center = Math.floor((left + right) / 2 )
        }else{
            
            right = center;
            right--
            center = Math.floor((left+right) / 2)
        }

    }

    return [-1,-1]

};