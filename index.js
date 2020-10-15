// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

let actionApplyer = function(a, b){
    let r = a

    for (let i=0; i < b.length; i++){
        r = b[i](r)
    }
    return r
}

