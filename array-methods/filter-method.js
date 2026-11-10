const number = [1,2,3,4,5,6]
const evens = number.filter((num) => num % 2 == 0)
console.log(evens)

const people = [
    {name: "Ko KO" , age: 17},
    {name: "Mg Mg" , age: 18},  
    {name: "Kyaw Kyaw " , age : 20}
]

const adults = people.filter((person) => person.age >= 18)
console.log(adults)