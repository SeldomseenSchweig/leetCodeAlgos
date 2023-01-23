// Runtime
// 77 ms
// Beats
// 36.42%
// Memory
// 41.9 MB
// Beats
// 36.42%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} s
//  * @return {number}
//  */
var countSegments = function(s) {
    let res = []

    if(s.trim().length === 0) return 0
    let sArr = s.trim().split(' ');
    for(let i = 0; i < sArr.length; i++){
        if ( Number.isInteger(sArr[i].charCodeAt(0))){
            res.push(sArr[i])
        }
    }
    console.log(res)
    return res.length
    
};