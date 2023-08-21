// hayduke415
// hayduke415
// Aug 21, 2023 11:00

// Details
// Solution
// JavaScript
// Runtime
// 9558 ms
// Beats
// 5.1%
// Memory
// 50.5 MB
// Beats
// 5.63%
// Click the distribution chart to view more details
// Related Tags
// Select tags
// 0/5
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    
    let b_v = 0
    let length = height.length
    if (length === 0) return 0
    if (length === 1) return 0
    let setx = new Set()
    for(let x=0; x < length; x++){
        let v = 0
        if(setx.has(height[x])) continue
        setx.add(height[x])
        for(let y = x+1; y < length; y++){

            v = Math.min(height[x], height[y]) * (y-x)
            if(v >  b_v) b_v = v
        }

    } 

    return b_v
    
};