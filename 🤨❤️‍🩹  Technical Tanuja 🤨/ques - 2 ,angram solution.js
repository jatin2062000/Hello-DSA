function anagram(arry,arry1){
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
const print =anagram('hello','llheo')
console.log(print)