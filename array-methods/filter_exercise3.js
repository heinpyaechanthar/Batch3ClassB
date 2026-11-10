const products = [
    {name: "A" , inStock: true},
    {name: "B" , inStock: false},  
    {name: "C" , inStock : true}
]

const product = products.filter((pro) => pro.inStock == true)
console.log(product)