const number = [1,2,3,4]
const doubled = number.map((num) => {
    return num * 2;
})

console.log("Original Array :" , number)
console.log(doubled)

const user = [
    { name: "John" , age: 21},
    { name : "Smith" , age: 21}
]

const name = user.map((users) => users.name)

console.log(name)
console.log(user)