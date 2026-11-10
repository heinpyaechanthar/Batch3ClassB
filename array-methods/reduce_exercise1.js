const cart = [
    { price: 100 },
    { price: 200 },
    { price: 50 }
]

const total = cart.reduce((acc, curr) => acc + curr.price ,0
)

console.log(total)

