//function declaration
function sayHelloDeclaration() {
    console.log("Hello form function declaration")
}

//function expression
const sayHelloExpression = function (){
    console.log("Hello form function expression")
}

//arrow function 
const sayHelloArrow = () => {
    console.log("Hello form function arrow")
}

//function call *** first call first output

sayHelloDeclaration()

sayHelloArrow()

sayHelloExpression()