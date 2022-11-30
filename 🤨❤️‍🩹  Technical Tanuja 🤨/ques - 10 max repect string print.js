


function getstring(string){
    const map={}
    let max = 1
    string.split("").forEach(element => { ////// is ki jaga hum for lopp bhi chala sakte hai

        map[element]=(map[element]||1)+1});
// console.log(map)
     let store = string[0]
        for(key in map){
            // console.log(map[key])
            if(map[key]>max){
                max=map[key]
                store=key
            }

        }
  return store
}
const res=getstring("abccbb")
console.log([res])