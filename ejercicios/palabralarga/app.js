const palabraLarga = function(){

    
    const palabra1 = document.getElementById("palabra1").value
    const palabra2 = document.getElementById("palabra2").value
    

    if (palabra1.length > palabra2.length){
        let resultado = palabra1.length - palabra2.length
        document.getElementById("resultado").innerHTML="La primera palabra tiene " + resultado + " mas letras que la palabra 2"
    }

    else if (palabra2.length > palabra1.length){
        let resultado = palabra2.length - palabra1.length
        document.getElementById("resultado").innerHTML="La segunda palabra tiene " + resultado + " mas letras que la palabra 2"
    }

    else{
        document.getElementById("resultado").innerHTML="las dos palabras tienen la misma longitud"

    }
    
}