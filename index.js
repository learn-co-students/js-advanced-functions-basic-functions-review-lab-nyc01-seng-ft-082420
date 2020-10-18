function saturdayFun(fun="roller-skate"){
  return `This Saturday, I want to ${fun}!`
}

let mondayWork = function(work="go to the office"){
  return `This Monday, I will ${work}.`
}

function wrapAdjective(arg="*"){
  return function(type="special"){
    return `You are ${arg}${type}${arg}!`
  }
}
const Calculator = {
   add: function(a, b){
     return a + b
   },

   subtract: function(a, b){
     return a - b
   },

   multiply: function(a, b){
     return a * b
   },

   divide: function(a, b){
     return a / b
   }
}

const actionApplyer = function(ini, fns){
  let a = ini

  for (let i = 0; i < fns.length; i++ ){
    a = fns[i](a)
  }

  return a
}
