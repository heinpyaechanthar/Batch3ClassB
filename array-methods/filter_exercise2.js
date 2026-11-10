const nature = [
    {name: "sun" },
    {name: "moon" },  
    {name: "planet"},
    {name: "sky"}
]

const con = nature.filter((natures) => natures.name.length > 4)
console.log(con)