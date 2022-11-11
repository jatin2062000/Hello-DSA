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





var lengthOfLongestSubstring = function(s) {
    
    let end =0
    let starts = 0
    let maxlenght=0
 
 const unique= new Set()
 while(end<s.length){
     if(!unique.has(s[end])){
         unique.add(s[end])
         end++
         maxlenght=Math.max(maxlenght,unique.size)
     }else{
         unique.delete(s[starts])
         starts++;
     }
 }
 return maxlenght
 
     
 };