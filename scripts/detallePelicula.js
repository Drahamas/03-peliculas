import { peliculas } from "../data/data.js";

const idPelicula = localStorage.getItem("idPelicula");
const peliculaCont =document.getElementById("peliculaCont")


    
console.log(peliculas[idPelicula - 1]);


        const {id, img, nombre, descripcion, genero, duracion, lanzamiento} = peliculas[idPelicula - 1];
        peliculaCont.innerHTML += `
        <div class="detalleImagen">
            <img src="${img}" alt="${nombre}">
        </div>
        <div class="detatelleMovie">
            <h1>${nombre}</h1>
            <h4>${duracion}</h4>
            <p><h3>Descripción: </h3>${descripcion}</p>
            <h4>${genero}</h4>
            <p><b>Lanzamiento: </b>${lanzamiento}</p>

        </div>
        `
    

