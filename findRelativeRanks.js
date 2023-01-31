// Runtime
// 81 ms
// Beats
// 91.64%
// Memory
// 43.9 MB
// Beats
// 95.36%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let res = []
    
    let freq = {}
    let sortedScores = score.slice().sort(function(a, b) { return  b - a; })
    let awards = ['Gold Medal','Silver Medal', 'Bronze Medal']
    for(let i = 0; i < score.length; i++){
        if(awards.length > 0){
            freq[sortedScores[i]] = awards[0]
            awards.shift()
        }else{
             freq[sortedScores[i]] = `${i+1}`
  
        }

    }
    for(let i = 0; i < score.length; i++){
        res.push(freq[score[i]])
    }
    return res
};