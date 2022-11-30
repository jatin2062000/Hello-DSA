///////////////////---> https://www.toptal.com/developers/sorting-algorithms
///////////////////all DSA Graphicly check how work---> https://visualgo.net/en

///// bubble short 
///// a shorting algorithm where the largest values bubble up at the top


function bubblesort(array){
    for(let i=array.length;i>0;i--){              //////// i ki value ko phly last bhj deya hai fir last se niche aaye gye
        for(let j=0;j<i-1;j++){                      /////////// ye loop chal rh hai i ki length tak end tak har bar ek element ko chord dega and age chale gya
            if(array[j]>array[j+1]){
        [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
    return array;
}

                                  
const res = bubblesort([9,7,6,3,7,8,4,5])
console.log(res)

//////////////////////////////////////////////////////////////////////////////


function bubbleSort(arr){
    let swapped=false
    for(let i=0;i<=arr.length-1;i++){
      for(let j=0;j<=length-2;j++){
        if(arr[j]>arr[j+1]){
          arr[j]=arr[j]+arr[j+1]
          arr[j+1]=arr[j]-arr[j+1]
          arr[j]=arr[j]-arr[j+1]
          swapped=true
          // let temp=arr[j]
          // arr[j]=arr[j+1]
          // arr[j+1]=temp
        }
      }
      if(swapped==false) break
    }
    
    return arr
    }
    console.log(bubbleSort([63,0,2]))