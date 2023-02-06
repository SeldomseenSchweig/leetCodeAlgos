// Runtime
// 79 ms
// Beats
// 37.60%
// Memory
// 44.1 MB
// Beats
// 5.1%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} word
//  * @return {boolean}
//  */
var detectCapitalUse = function(word) {
    // for(let i = 0; i < word.length; i++){
    //     if(word[i].charCodeAt(0) > 60 ) return false
    //     console.log( word.charCodeAt(i))
    // }
    if (word === word.toUpperCase()) return true
    if (word === word.toLowerCase()) return true
    if(word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1)) {
        return true
        }
        console.log(word.slice(1).toLowerCase())

    return false
};