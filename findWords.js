// Runtime
// 76 ms
// Beats
// 35.56%
// Memory
// 42.3 MB
// Beats
// 8.44%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
var findWords = function(words) {
    let row1  = new Set(["q","w", "e", "r",'t', 'y', 'u', 'i', 'o', 'p'])
    let row2 = new Set(["a","s", "d", "f",'g', 'h', 'j', 'k', 'l' ])
     let row3 = new Set(["z","x", "c", "v",'b', 'n', 'm' ])
     let res = []
     
     for(let i = 0; i < words.length;i++){
         let count1 = true 
         let count2 = true 
         let count3 = true
         console.log(count1,count2,count3, words[i])
         for(j=0; j < words[i].length;j++){
            if(!row1.has((words[i][j]).toLowerCase())) count1 = false
            if(!row2.has((words[i][j]).toLowerCase())) count2 = false
            if(!row3.has((words[i][j]).toLowerCase())) count3 = false
            
         }
         if(count1 || count2 || count3) res.push(words[i])
     }
    return res
};