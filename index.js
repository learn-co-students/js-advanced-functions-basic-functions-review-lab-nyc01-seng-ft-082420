// Your code here
const saturdayFun = (activity="roller-skate")=>{
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = (sign="*") =>{
  return function(event="special"){
    return `You are ${sign}${event}${sign}!`
  }
}


const Calculator = {
  add: function(a,b){
    return a+b
  },
  subtract: function(a,b){
    return a-b
  },
  multiply: function(a,b){
    return a*b
  }
  ,
  divide: function(a,b){
    return a/b
  }
}


let actionApplyer = function(start, arr) {
  let a = start

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
}
