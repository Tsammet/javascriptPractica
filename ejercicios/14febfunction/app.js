
// funciòn expresion 

const func1 = function(){
    return "funciòn tradicional";
}

// FUnciòn flecha 

const func2 = () => {
    return "Funciòn Flecha";
}

const multiplicacion = (a,b) => {
    return a*b
}

console.log(multiplicacion(2,2))



// Funciòn Flecha resumida

const multiplicacion2 = (a,b) =>a*b;

console.log(multiplicacion(5,5))



// FUNCION FLECHA CON CALLBACK

const pruebaMultiplicacion = (a,b,z) =>{
    const rta = a*b;
    z(rta);
    return rta;
};


function imprimirResultado(rta){
    console.log("resultado es: "+ rta)
}

const a = pruebaMultiplicacion(100,5,imprimirResultado);