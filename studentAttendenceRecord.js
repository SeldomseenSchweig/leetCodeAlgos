// Runtime
// 66 ms
// Beats
// 67.73%
// Memory
// 42.7 MB
// Beats
// 17.57%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var checkRecord = function(s) {
    let freq = {'A':0,'L':0}
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'A'){
            freq['A']++
            freq['L'] = 0
            
        }
        if(s[i] === 'L') freq['L']++
        if(s[i]==='P')  freq['L'] = 0
        if(freq['L'] === 3) return false
        if(freq['A'] > 1) return false
        
    }
    console.log(freq['A'])
    return true
};