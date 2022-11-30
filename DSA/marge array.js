function element(a,b){
    let margeArray 
    let finallArray
    margeArray =  [...a,...b]
    for(let i=0; i<margeArray.length;i++){
      console.log(margeArray[0])

       
    } 
}
const res = element([2,2,3,5],[5,5,5,2,1])
console.log(res)

// function removeDuplicates(array){  
//     var collect = []  
//     for( value of array){  
//         if(collect.indexOf(value)==-1){      //// indexOf always return -1
//         //    console.log(value)
//             collect.push(value)
//         }  
//     }  
//     // console.log(collect)
//     return collect
// }  
// const res =  removeDuplicates(["green","black","black"])
// /////const colors = [1,2,3,4,1,2,3,1,2,3,4]
// console.log(res)  



// function element(a,b){
//     let margeArray 
//     margeArray =  [...a,...b]
//     let finallArray = [...new Set(margeArray)]
//     return finallArray
// }
// const res = element([2,2,3,5],[5,5,5,2,1])
// console.log(res)