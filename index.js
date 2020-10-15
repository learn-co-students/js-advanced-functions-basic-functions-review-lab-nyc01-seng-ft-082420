// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(string='*') {
    return function(param='special') {
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {

    add(x, y){
        return x + y
    },    
    subtract(x,y) {
        return x - y
    },

    multiply(x,y) {
        return x * y
    },

    divide(x,y) {
        return x / y
    }

}

function actionApplyer (int, array) {
    let x = int

    for (const y of array){
      x = y(x)
    }

     return x

}
