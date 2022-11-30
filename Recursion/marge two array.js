////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isFlattern(arr){
    let res=[]
        for(let i=0;i<arr.length;i++){
            if(!Array.isArray(arr[i])){
                res.push(arr[i])
           
            }else{
              res=res.concat(isFlattern(arr[i]))  
            }
        }
        return res
    }                        
    console.log(isFlattern([[5,6,9,8],[9,6,3,2,5,8]]))


