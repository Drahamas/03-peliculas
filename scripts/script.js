import {peliculas} from "../data/data.js";

const contPeliculas = document.getElementById("contPeliculas");
const slider = document.getElementById("slider");
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");

let contador = 0;


function showSlider(cont){
    const {img} = peliculas[cont];
    slider.innerHTML =`
    <img class="imgSlider" src="${img}" alt="">
    `
}
showSlider(contador);

function adelante(){
        if(0 <= contador && contador <= 5){
            
            ++contador
            console.log(contador);
            showSlider(contador);
        }else{
            contador = 0;
            showSlider(contador);
        }
}
function atras(){
    if(0 < contador && contador <= 6){
        
        --contador
        console.log(contador);
        showSlider(contador);
    }else{
        contador = 6;
        showSlider(contador);
    
    }
}
btnLeft.addEventListener("click", ()=>{
    atras()
})
btnRight.addEventListener("click", ()=>{
    adelante();
})


setInterval(function(){
    adelante();
}, 5000);



const showMovie = (array, contenedor)=>{
    array.forEach(element => {
        const{id, img, nombre, descripcion, genero, duracion, lanzamiento} = element;
        contenedor.innerHTML += `
        
            <a href="../pages/detallePelicula.html" id=${id} class ="panel" style="background-image: url(${img});">
                <div class="textPelicula">
                <h3>${nombre}</h3>
                <h4>${duracion}</h4>
                </div>
            </a>
            
        
        `
    });
}

showMovie(peliculas, contPeliculas);


document.addEventListener("click", ({target})=>{
    if (target.classList.contains("panel")){
        let id = target.id;

        localStorage.setItem("idPelicula", id);
        
    }
})