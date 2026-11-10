try{
    let num = "abc"
    let result = num * 3
    console.log("Result " , result)
}

catch (error){
    console.log("Error message")
    console.log("Error name: " , error.name)
    console.log("Error message " , error.message)
}

finally{
    console.log("Code finish running (with or without error)" )
}