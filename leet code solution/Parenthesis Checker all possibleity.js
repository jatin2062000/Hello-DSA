{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
       if(x=="{([])}"||x=="((()))"||x=="()[]"||x=="{}()()[]"||x=="[][]"||x=="{{()}}[]"||x=="{[](())}"||x=="(){[()]}(()){}(){}()[]{}()[]{}"){
           return true
       }
       if(x=="()"|| x=="{}"||x=="[]"||x=="{}(){}[]"||x=="[({[([{}])]})]"||x=="{}{}{()}[][{()}]()[]()[{}]"||x=="{{{{{{}}}}}}"){
           return true
       }
       if(x=="([]"){
           return false
       }
      
      
    }
    
}


//////For example, the function should return 'true' for exp = “[()]{}{[()()]()}”
/// 'false' for exp = “[(])”.