// Runtime
// 91 ms
// Beats
// 37.16%
// Memory
// 50.3 MB
// Beats
// 5.90%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} s
//  * @return {string}
//  */
var reverseWords = function(s) {
    let res = []
    let newS = s.split("").reverse().join("").split(" ")
    for(let word of newS){
        res.unshift(word)
    }

    return res.join(" ")
};