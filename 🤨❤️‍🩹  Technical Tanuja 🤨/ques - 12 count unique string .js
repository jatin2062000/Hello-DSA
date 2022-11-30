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

 const res = lengthOfLongestSubstring("abcabcabcx")
 console.log(res)