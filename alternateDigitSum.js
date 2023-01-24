// Runtime
// 90 ms
// Beats
// 31.75%
// Memory
// 41.9 MB
// Beats
// 82.46%
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
var alternateDigitSum = function(n) {
    let nArr = n.toString().split('')
    let sum = 0
    for(let i = 0; i < nArr.length; i++){
        let num = Number(nArr[i])
        if (i % 2 !== 0) num = num * -1
        sum = sum + num 

    }
    return sum
    
};