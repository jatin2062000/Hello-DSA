

var lengthOfLongestSubstring = function(s) {
    let start=0                  
    let end=0                     
    let set=new Set()  
    let maxLength=0
while(end<s.length){
if(!set.has(s[end])){    
 set.add(s[end])
 
 end++
 maxLength=Math.max(maxLength,set.size)
 }
else{
   set.delete(s[start])
   start++
}
}


return maxLength
}
const res = lengthOfLongestSubstring("abcabcabc")
console.log(res)