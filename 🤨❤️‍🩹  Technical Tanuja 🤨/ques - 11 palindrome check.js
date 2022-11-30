///////// how do you check if a given string is a palindrome

////////// like palindrome  ->  1. dad->dad = true
/////////// level -> level = true 
/////////// jatin -> nitaj = false
/////////// 121-> 121 = true




/////// use inbuild function ( case 1)f


function case1(string){
    let print =  string.split("").reverse().join("")
      // console.log(print)
      return string.toLowerCase() === print.toLowerCase()
  }
  
  const res = case1("level")
  console.log(res)
  
  
  /////////// without useing inbuild function 
  
  function case2(str){
      let print1=str.toLowerCase()
      let left =0
      let rigth=str.length-1;
  
      while(left<rigth){
          if(str[left]!==str[rigth]) return false
          left++
          rigth--
      }
      return true
  
  }
  const res1 = case1("leve")
  console.log(res1)