//////////    Maximum Subarray

function sumslidingWindow(array){
    let max =0
    for(let i =0 ; i<array.length+1;i++){        
       temp=0
        for(let j=0;j<array.length;j++){          
            temp+=array[i+j]
        }
        if(temp>max){
            max=temp
        }
    
    
    }
    return max
    }
    const result= sumslidingWindow([1,2,2])
    console.log(result)