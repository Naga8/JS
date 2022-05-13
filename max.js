const newArr = [5, 10, 25, 63, 58, 42,44,45,46]
const high = function(arr){
    const ascfunc = arr.map((elem)=>{
        return elem
    })
    ascfunc.sort(function(a, b){return a - b})
    console.log(ascfunc)
    const high1 = ascfunc.pop()
    const high2 = ascfunc.pop()
    const high3 = ascfunc.pop()
    return high3
}
console.log("Third highest is" +" " + high(newArr))

// console.log(newArr)


const low = function(arr){
    const desfunc = arr.map((elem)=>{
        return elem
    })
    desfunc.sort(function(a, b){return b - a})
    console.log(desfunc)
    const low1 = desfunc.pop()
    const low2 = desfunc.pop()
    const low3 = desfunc.pop()
    return low3
}
console.log("Third lowest is" +" "+ low(newArr))