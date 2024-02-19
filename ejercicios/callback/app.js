function realizarOperacion(num1, num2, op){
    console.log('Operaciòn: '+ num1 + " y " + num2)
    op(num1, num2);
}


function division(a, b){
    console.log('division: ' + a / b)
}

function sumar(a,b){
    console.log('suma: ' , a + b)
}

realizarOperacion(10, 3, sumar)
realizarOperacion(10, 3, division)
