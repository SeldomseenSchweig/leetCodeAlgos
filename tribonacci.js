// Runtime
// 71 ms
// Beats
// 44.84%
// Memory
// 41.9 MB
// Beats
// 39.63%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} n
//  * @return {number}
//  */
var tribonacci = function(n) {
    let arr = [0,1,1]
    if(n===0) return 0
    if(n===1) return 1

    for(i = 2,k = 1, j = 0 ; i < n; i++, j++, k++){
        let sum = 0
        arr.push(sum = sum + arr[i] + arr[j] + arr[k])
        
        }
    return arr[arr.length-1]
};