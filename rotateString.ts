// Jul 03, 2023 13:04
// Details
// Solution
// TypeScript
// Runtime
// 63 ms
// Beats
// 56.92%
// Memory
// 45.1 MB
// Beats
// 6.15%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
function rotateString(s: string, goal: string): boolean {

    let sA = s.split("")
    let gA = goal.split("")
    if(s.length != goal.length) return false
    for(let i = 0; i < sA.length; i++){
        let word = sA.splice(-1,1);
        sA.unshift(word.toString())

        if (sA.join("") === gA.join("")) return true 
    }

    return false
};