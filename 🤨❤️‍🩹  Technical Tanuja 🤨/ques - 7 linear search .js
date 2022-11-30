//////////////-> linear search Algorithm

const users=[{username:"jatin",email:"jatin123@gmail.com"},
             {username:"yousuf",email:"yousuf123@gmail.com"},
             {username:"lucky",email:"lucky123@gmail.com"} ]



            function searchingUser(array,search){
                for( let item of array){
                    if(item['username']===search){
                        return true 

                    }
                    
                }
                return false 
            }

            const res = searchingUser(users,"jatin")
            console.log(res)






