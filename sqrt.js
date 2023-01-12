// Runtime
// 76 ms
// Beats
// 88.33%
// Memory
// 42.8 MB
// Beats
// 74.98%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} x
//  * @return {number}
//  */
var mySqrt = function(x) {
    if(x === 1) return 1;
    let left = 0;
    let right = x;
    let answer = 0;
    while (left <= right){
        let middle = Math.floor((right + left)/2)
         if(middle*middle > x){
            right = middle-1
        }else{
            answer = middle
            left = middle+1
        }
        
    }
    return answer
};