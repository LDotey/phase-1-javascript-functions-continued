function saturdayFun(activity= 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
function mondayWork (activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}
function wrapAdjective (quality = 'special'){
    return (`You are ${quality}!`);
}
function wrapAdjective(wrapper = '*'){
    return function(quality = 'special'){
        return `You are ${wrapper}${quality}${wrapper}!`
    }
}


