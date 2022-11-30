let array=["you","me","I","you","me","I"];  
function reduceDuplicates(new_array){  
let collect=new_array.reduce(function (a,b){  
if(a.indexOf(b)<0) a.push(b);  
return a;},[]);  
return collect;  
}  
console.log(reduceDuplicates(array)); 