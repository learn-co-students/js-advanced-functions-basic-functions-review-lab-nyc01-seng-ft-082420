// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
        let encouragingPromptFunction = wrapAdjective(flair)
    }
}

let Calculator = {}
Calculator.add = function(num1, num2){
    return num1 + num2
}
Calculator.subtract = function(num1, num2){
    return num1 - num2
}
Calculator.multiply = function(num1, num2){
    return num1 * num2
}
Calculator.divide = function(num1, num2){
    return num1 / num2
}

function actionApplyer(startingInt, functionArray){
    for (const func of functionArray){
        startingInt = func(startingInt)
    }
    return startingInt
}
