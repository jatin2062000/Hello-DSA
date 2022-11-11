
////////// identifing the question of sliding window 
///////////////   1) array +  string 
/////////////// 2) sub array + sub string 
/////////////// 3) window size (k)=> fixed size 


function sumslidingWindow(array,num){
let max =0
for(let i =0 ; i<array.length-num+1;i++){        //////   array.length = 4
   temp=0                                            ///////  total window size = 2 ///// 4-2+1=3
    for(let j=0;j<num;j++){
        console.log(num)                            ///////  num ka mtlb hai loop 4 bar chale gya            
        temp+=array[i+j]
    }
    if(temp>max){
        max=temp
    }


}
return max
}
const result= sumslidingWindow([100,200,300,400],2)
console.log(result)