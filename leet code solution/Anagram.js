////////////// anagram comapair


function countFreq(arry,arry1){
    if(arry.length!==arry1.length){
        return false;
    }
    let storehere ={}
    for (let i =0 ; i<arry.length; i++){
        storehere[arry[i]] = (storehere[arry[i]] || 0)+1
    }
  

for(let j=0 ; j<arry1.length;j++){
    if(!storehere[arry1[j]]){
        return false
    }
    storehere[arry1[j]]-=1.
}
return true;
}
const print =countFreq('hello','llheo')
console.log(print)

/////////// 2nd 
function case1(array , array1){


    if(array.length!==array1.length){
        return false
    }
    let priyanka = array.split('').sort().join('')
    let priyanka1 = array1.split('').sort().join('')
    if(priyanka===priyanka1){
        return true
    }
    return false
    }
    
    const res1 = case1("leve","leva")
    
    console.log(res1)
    