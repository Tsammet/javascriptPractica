const libro = {
    title : "The Raven",
    autor : "Edgar Allan Poe",
    genre : "Suspense",
    datePublish : 1845,
    editorial : "Penguin Books"
}

const mostrarDetallesLibro = function({title, autor, genre, datePublish, editorial}){
    console.log("El Titulo es: "+ title + "\n El autor es: "+ autor + "\n el genero es: " + genre + "\n el año de publicaciòn fue: "+ datePublish + "\n Y su editorial es: "+ editorial)
}

mostrarDetallesLibro(libro)