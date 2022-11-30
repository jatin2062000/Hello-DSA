



    function reverseStr(str) {
        if (str.length == 1) return str;
        else return reverseStr(str.slice(1)) + str[0];
      }
      console.log(reverseStr("hello"));


function reverseWord(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = reverseWord(str[i]);
    }
    return str.join(" ");
  }
  console.log(reverseWord("hello at all"))