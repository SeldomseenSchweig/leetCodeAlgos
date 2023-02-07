// Runtime
// 301 ms
// Beats
// 5.11%
// Memory
// 51.8 MB
// Beats
// 5.1%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[][]} mat
//  * @param {number} r
//  * @param {number} c
//  * @return {number[][]}
//  */
var matrixReshape = function(mat, r, c) {
    let res = [];
    let row = []
    if(mat[0].length * mat.length != r * c) return mat
    for(let i = 0; i < mat.length; i++){
        for( let j = 0; j < mat[i].length; j++){
                row.push(mat[i][j])
                if(row.length === c){
                    res.push(row)
                    row = []
                }
        }
        console.log(res)

    }
    return res
};