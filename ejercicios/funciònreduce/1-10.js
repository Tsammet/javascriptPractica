const numeros = [1,2,3,4,5,6,7,8,9,10]
// LA FUNCIÒN REDUCE SIRVE PARA REDUCIR LA FUNCIÒN A UN SÒLO VALOR
const sumatotal = numeros.reduce(function(acomulador, numero){

       return acomulador + numero
})

console.log(sumatotal)