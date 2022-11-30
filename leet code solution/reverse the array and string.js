///////////   Reverse the Integer Number AND ARRAY AND  string

function Reversee1(hello){
  let newStr=""
for(let i=hello.length-1;i>=0;i--){
    newStr+=hello[i]
}
return newStr
}
const res = Reversee1("hello my name is rajdidi")
console.log(res)

////////////////////////////////////////////////////////////////////////////////
function Reversee(hello){
  let myPrint = []

  myPrint=hello.split("").reverse().join("")
return myPrint
}
const res1 = Reversee("123")

console.log(res1)