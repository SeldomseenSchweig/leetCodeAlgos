// Runtime
// Details
// 1277ms
// Beats 13.94%of users with TypeScript
// Memory
// Details
// 50.64mb
// Beats 96.73%of users with TypeScript
// Next question
// 119. Pascal's Triangle II


function containsNearbyDuplicate(nums: number[], k: number): boolean {

    if(nums.length === 0 || nums.length === 1) return false
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        for(let x = i+1; Math.abs(x - i) <= k && x < nums.length; x++ ){   
            if(num === nums[x] && Math.abs(x - i) <= k) return true     
        }

    }
    return false
    

};