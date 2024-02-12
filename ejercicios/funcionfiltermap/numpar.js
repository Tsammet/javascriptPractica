numeros = [1,2,3,4,5,6,7,8,9,10]

// LA FUNCION MAP SIRVE PARA PODER CAMBIAR EL VALOR A ALGO 

const numerospordos = numeros.map(function(numero){
    if(numero % 2 == 0){
        return numero = numero * 2;
    }

    
// LA FUNCION FILTER SIRVE PARA FILTRAR POR ALGO ESPECIFICO
    

}).filter(function(resultado){
    return resultado != undefined;
});

console.log(numerospordos)