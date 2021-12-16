// Code your solution here
function findMatching(array, name){
    return array.filter(item => item.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, name){
    return array.filter(item => item[0]=== name[0])
}

function matchName(obj, name){
    return obj.filter(item => item.name === name )
}