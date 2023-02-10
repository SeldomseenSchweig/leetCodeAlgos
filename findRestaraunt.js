// Runtime
// 185 ms
// Beats
// 12.58%
// Memory
// 55 MB
// Beats
// 5.9%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string[]} list1
//  * @param {string[]} list2
//  * @return {string[]}
//  */
 
var findRestaurant = function(list1, list2) {
    let map1 = new Map()
    let map2 = new Map()
    for(let i = 0;i < list1.length; i++ ){
        map1[list1[i]] = i

    }
        for(let i = 0;i < list2.length; i++ ){
        map2[list2[i]] = i

    }

    let smaller = map1.size > map2.size ? map2 : map1
    let larger =  map1.size > map2.size ? map1 : map2
   
    let res =  []
    for(word in smaller){
        
        if(larger[word] || larger[word] === 0){
            
            res.push([word,smaller[word] + larger[word] ])
            }
    }
    let res2 = []
    let sorted = res.sort(function(a, b) { return a[1] - b[1]; })
    let min = sorted[0][1]
    
    console.log(sorted)

    for (let i = 0; i < res.length; i++){
        if(res[i][1] <= min) res2.push(res[i][0])
    }
    
    return res2
    
};