


function a(sum){
let max = -Infinity
let min  =Infinity
for(number of sum){
    if(number>max){
        max = number
    }
    if(number<min){
        min=  number
    }
}
return [["max",max],["min",min]]

}


const res1 = a([2,3,4,5,6,2,12,1000])

console.log(res1)

//////////////  diffrent method 

function maxAndmin(array){
    let num = -Infinity
    let result =[]
    array.sort((a,b)=>a-b)
    return [array[0],array.pop()]    ////// Time c 0(1)
    
    }
    const res =  maxAndmin([1,21,23,543,21,43,65])
    console.log(res)