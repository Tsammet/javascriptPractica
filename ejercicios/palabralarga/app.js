const palabraLarga = function(){

    
    const palabra1 = document.getElementById("palabra1").value
    const palabra2 = document.getElementById("palabra2").value
    
    let resultado = palabra1.length - palabra2.length

    if (resultado > 0){
        document.getElementById("resultado").innerHTML="La palabra 1 tiene " + resultado + " mas letras que la palabra 2"
    }

    else if (resultado < 0){
        document.getElementById("resultado").innerHTML="La palabra 2 tiene " + resultado + " mas letras que la palabra 2"
    }

    else{
        document.getElementById("resultado").innerHTML="las dos palabras tienen la misma longitud"

    }
    
}