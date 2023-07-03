// hayduke415
// Jul 03, 2023 12:25
// Details
// Solution
// TypeScript
// Runtime
// 73 ms
// Beats
// 78.26%
// Memory
// 45.1 MB
// Beats
// 69.57%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
function transpose(matrix: number[][]): number[][] {
    let newMatrix = [];
    for(let i = 0; i < matrix[0].length; i++){
        let array = [] 
        for(let x = 0; x < matrix.length; x++){
            array.push(matrix[x][i])

        }
        newMatrix.push(array)
    }
    return newMatrix

};