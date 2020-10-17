let wrapAdjective = function(flair = "*"){
  return function(adj = "special"){
    return `You are ${flair}${adj}${flair}!`
  }
}

let saturdayFun = function(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}

function actionApplyer(init, arr){
  let a = init

  for (let i=0; i<arr.length; i++){
    a = arr[i](a)
  }
  return a
}
