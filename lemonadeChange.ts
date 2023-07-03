hayduke415
Jul 03, 2023 12:10
Details
Solution
TypeScript
Runtime
170 ms
Beats
9.61%
Memory
57 MB
Beats
7.69%
Click the distribution chart to view more details
Notes
Write your notes here
Related Tags
Select tags
0/5
function lemonadeChange(bills: number[]): boolean {

    let fives = [];
    let tens = [];
    if(bills[0] !=5) return false;
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5) fives.push(5)
        if(bills[i]===10){
            if(fives.length === 0) return false
            fives.pop()
            tens.push(10)
            }
        if(bills[i] === 20){
            console.log(fives.length,", ", tens.length)
            if(fives.length === 0) return false
            if(fives.length <= 2 && tens.length === 0 ) return false
            if(fives.length >=3 &&  tens.length === 0 ){
                fives.pop()
                fives.pop()
                fives.pop()
            }else{
                fives.pop()
                tens.pop()
            }

            
        }
    }
    return true
};