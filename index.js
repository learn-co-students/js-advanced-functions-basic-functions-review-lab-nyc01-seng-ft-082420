// Your code here

const saturdayFun = (activity="roller-skate") => {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (style="*") => {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
   add: function (a, b) {
    return a + b
   },
   subtract: function (y, z) {
       return y - z
   },
   multiply: function (s,b) {
       return s * b
   },
   divide: function(s,b) {
        return s / b
   }
}

const actionApplyer = (integer, array) => {
    let z = integer

    for(let i = 0; i < array.length; i++) {
        z = array[i](z)
    }
    return z
}

actionApplyer()
wrapAdjective()
saturdayFun()
mondayWork("work from home!")