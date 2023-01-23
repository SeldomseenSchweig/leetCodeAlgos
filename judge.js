// Runtime
// 125 ms
// Beats
// 53.55%
// Memory
// 50.9 MB
// Beats
// 39.96%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} n
//  * @param {number[][]} trust
//  * @return {number}
//  */
var findJudge = function(n, trust) {

    let judge = [];
    let set_judge = new Set()
    if(n === 1) return n
    if(n > 2 && trust.length === 0) return -1

    let notJudge = new Set()
    for(let i = 0; i < trust.length; i++){
       notJudge.add(trust[i][0])
    }
        for(let i = 0; i < trust.length; i++){
       if (!notJudge.has(trust[i][1])) judge.push(trust[i][1])
        if (!notJudge.has(trust[i][1])) set_judge.add(trust[i][1])

    }
    console.log(judge)
    console.log(set_judge)
    if(judge.length !== n-1) return -1
    if(set_judge.size > 1) return -1
    return judge[0]
    
};