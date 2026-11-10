const numbers = [10,20,30]
const total = numbers.reduce((acc , curr) => acc + curr ,0)//0 is initial value
console.log(total)

const fruits = ["apple" , "orange" , "apple", "banana", "apple"]
const count = fruits.reduce((acc , fruit, index) =>{
    acc[fruit] = (acc[fruit] || 0) +1
    return acc
} , {})//acc = {}; empty object as initial value

console.log(count)