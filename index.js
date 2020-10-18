// Your code here

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}


let wrapAdjective = function(string="*") {
  return function (thing="special") {
    return `You are ${string}${thing}${string}!`
  }
}

let Calculator = {};

Calculator.add = function(num1, num2) {
  return num1 + num2
}

Calculator.subtract = function(num1, num2) {
  return num1 - num2
}

Calculator.multiply = function(num1, num2) {
  return num1 * num2
}

Calculator.divide = function(num1, num2) {
  return num1 / num2
}

function actionApplyer(integer, array) {
  let something = integer

  for (let i = 0; i < array.length; i++) {
    something = array[i](something);
    
  }

  return something
}