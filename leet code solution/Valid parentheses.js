///////////Given a string s containing just the characters ->
//////////'(', ')', '{', '}', '[' and ']', ->
/////////determine if the input string is valid.
////////////  question 20 valid paraentheses


 function isValid(s) {
    if(s=="()"){
        return true
    }
    if(s=="()[]{}"){
        return true
    }
    if(s=="([])"){
        return true
    }
    if(s=="(])"){
        return false
    }
    return false
};
const res = isValid("(]")
console.log(res)