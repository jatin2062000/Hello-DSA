////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isPow(b,exp){
    if(exp==0)return 1
    else return b*isPow(b,exp-1)
    }
    console.log(isPow(4,5))

////////////////////////////////////////////////////////////////////////////

    function pow(base,power) {
      if (power == 0) return 1
      if (power > 0)
      return base * pow(base,power-1)
      else
      return 1/base * pow(base,power+1)
  } console.log(pow(2,-5));