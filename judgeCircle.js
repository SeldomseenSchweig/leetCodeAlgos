// Runtime
// 67 ms
// Beats
// 91.39%
// Memory
// 43.2 MB
// Beats
// 41.84%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} moves
//  * @return {boolean}
//  */
var judgeCircle = function(moves) {

     let sides = 0
     let vert = 0
     for(let i = 0; i < moves.length; i++){
        if(moves[i]=== "R") sides++
        if(moves[i] === "L") sides--
        if(moves[i] === "U") vert++
        if(moves[i] === "D") vert--

     }
     return vert === 0 && sides === 0

    
};