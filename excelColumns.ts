// Accepted
// Editorial
// Solution
// Runtime
// Details
// 54ms
// Beats 69.44%of users with TypeScript
// Memory
// Details
// 43.80MB
// Beats 6.48%of users with TypeScript




function convertToTitle(columnNumber: number): string {

    let res = "";
    let alphabet = {1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"I",10:"J",11:"K",12:"L",13:"M",14:"N",15:"O",16:"P",17:"Q",18:"R",19:"S",20:"T",21:"U",22:"V",23:"W",24:"X",25:"Y",26:"Z"}
    if(columnNumber <= 26 ) return alphabet[columnNumber]
    if(columnNumber > 26 && columnNumber % 26 === 0){
        columnNumber = columnNumber - 26
        res+= "Z"
      while(columnNumber >= 26){
          columnNumber = columnNumber / 26
          let number = columnNumber % 26
          console.log(number, "hello")
          if(number === 0 ){
              res += "Z"
              return res
              break
          }
          columnNumber = (columnNumber - number)
          res += alphabet[number]
     }
     let answer = res.split("").reverse().join("")
     return answer
     }
    while(columnNumber > 26){
        console.log(columnNumber, res)
        let number = columnNumber % 26;
        console.log(columnNumber, res)
        columnNumber = (columnNumber - number) / 26
        console.log(columnNumber, res)
        res += alphabet[number]
        console.log(columnNumber, res)
        
    }
    res+=alphabet[columnNumber]
    let answer = res.split("").reverse().join("")
    
return answer
};