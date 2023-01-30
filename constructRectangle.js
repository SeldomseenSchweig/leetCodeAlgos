
// 271 ms
// Beats
// 19.10%
// Memory
// 42.2 MB
// Beats
// 25.84%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} area
//  * @return {number[]}
//  */
var constructRectangle = function(area) {
    let arr = []
    for(let i = 1; i < area/2+1; i++){
        if(area % i === 0)arr.push(i)
    }
    if(arr.length === 1) return [area, 1]
    console.log(arr[Math.ceil(arr.length/2)])
    return [arr[Math.ceil(arr.length/2)], area/arr[Math.ceil(arr.length/2)]]
    
};