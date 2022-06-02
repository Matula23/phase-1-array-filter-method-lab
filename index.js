// Code your solution here
function findMatching(array, drivers){
    const newArray = array.filter(element => element.toUpperCase() === drivers.toUpperCase())
    return newArray
}

function fuzzyMatch(array, letters){
    const newArray = array.filter(element => element.indexOf(letters) === 0)
    return newArray
}

function matchName(array, propertyName){
    const newArray = array.filter(element => element.name === propertyName)
    return newArray
}