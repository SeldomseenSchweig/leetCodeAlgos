// Runtime
// 122 ms
// Beats
// 64.2%
// Memory
// 50.5 MB
// Beats
// 12.74%
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
var firstUniqChar = function(s) {
    let freq = {}
    for(let i = 0; i < s.length; i++){
        if(freq[s[i]]) {
            freq[s[i]]++
            }else{
                freq[s[i]] = 1
        }
    }
    let singles = []
    for (const s in freq) {
        if(freq[s] === 1) singles.push(s)
        }
    console.log(singles)
    
    
return s.split('').indexOf(singles[0])
};