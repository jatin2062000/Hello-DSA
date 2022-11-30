/////////// Insert element in array JS | Data Structure  //////////////

function InsertElement(array){
    let NewElement=80
    let position=2
    for(let i=array.length-1;i>=0;i--){   ///// revers
        if(i>=position){ 
            array[i+1]=array[i]
            if(i==position){ 
                array[i]=NewElement
            }
        }
       
       

    }
    return (array)
}

const res=InsertElement([29,7,63,73,25])

console.log(res)