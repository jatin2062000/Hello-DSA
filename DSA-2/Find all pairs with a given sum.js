////////////////Find all pairs with a given sum

// for(long long int i=0;i<N; i++){

            

//     for( long long int j=0; j<M; j++){

//         if(A[i]+B[j]==X){

//             ans.push_back(make_pair(A[i],B[j]));

function sumPair(array,array2,target){
    let pair=[]
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array[i]+array2[j]===target){
                return [[array[i],array2[j]]=[array[i],array2[j]]]
            }
        }
    }
    return false
}
const res= sumPair([1,2,3,2],[1,3,2,4],6)
console.log(res)