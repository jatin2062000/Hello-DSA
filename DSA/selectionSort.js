/////////// selection sort 
////////// [0,2,3,4,34,23,4,6]

function selectionSort(array){
    for(let i=0;i<array.length;i++){
        let min = i
        for(let j =i+1;j<array.length;j++){

            if(array[j]<array[min]){
                min=j
            }

        }
        if(i!==min){
            let temp=array[i]
            array[i]=array[min]
            array[min]=temp
        }
    }
  return array
  
}
const res = selectionSort([1,45,4,32,5,6,7,32])
console.log(res)