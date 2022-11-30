function chocolate(array,distribution){
    array.sort()
    //console.log(array)
    let min = Number.MAX_VALUE
    // console.log(min)
    for(let i=0;i+distribution-1<array.length;i++){
        let diff = array[i+distribution-1]-array[i]
        if(diff<min){
            min=diff
        }
    }
 return min
}
const  res = chocolate([1,2,34,45,32,32,56,23],3)
console.log(res)
