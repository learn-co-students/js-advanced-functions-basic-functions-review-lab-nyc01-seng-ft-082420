// Your code here

function saturdayFun(activity="roller-skate") {
    return "This Saturday, I want to " + `${activity}!`
}

function mondayWork(activity="go to the office") {
    return "This Monday, I will " + `${activity}.`
}

// let encouragePromptFunction = function wrapAdjective(string="*") {
//     return function(param="special") {
//         return "You are " + `${string}${param}${string}!`
//     }
// }

// encouragePromptFunction("%")("a dedicated programmer")

function wrapAdjective(string="*") {
    return function(param="special") {
        return "You are " + `${string}${param}${string}!`
    }
}

wrapAdjective("%")("a dedicated programmer")


let Calculator = {



    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
}


// let Calculator = {
//     add: (function() {
//         return 1 + 3
//     })(),
//     subtract: (function() {
//         return 1 - 3
//     })(),
//     multiply: (function() {
//         return 1 * 3
//     })(),
//     divide: (function() {
//         return 10 / 5
//     })()



// }
let a = function(int){return int / int} 
let b = function(int){return int - 1} 
let c = function(int){return int + 4}


let numberWhirlyDirl = [a, b, c]





function actionApplyer(startingInt, array) {
    //let lastEl = []
    if (array.length === 0) {
        return startingInt
    } else {
        for (let i = 0; i < array.length; i++) {
           startingInt = array[i](startingInt)
        }

    }

    return startingInt
}