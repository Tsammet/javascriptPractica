function horaFutura(){
    const hActual = 5;
    const hSuma = 25;
    const res = hActual + hSuma
    const horaFutura = (hActual+hSuma) % 12;
    if (res > 24){
        console.log(horaFutura)
    }
    else{
        console.log(hActual+hSuma)
    }
}   

horaFutura()