const colors = ["red", "blue", "red", "green", "blue", "red"]

const count = colors.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})

console.log(count)