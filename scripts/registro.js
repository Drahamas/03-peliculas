const form = document.getElementById("form");

function Persona(name, lastName, phone, adress, observ){
    this.nombre = name;
    this.apellido = lastName;
    this.telefono = phone;
    this.direccion = adress;
    this.observ = observ;
}

// Agregar Usuario
form.addEventListener("submit", (e)=> {
    // e.preventDefault()                                                   //evita que se borré la información del formulario
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const telefono = document.getElementById("telefono").value
    const direccion = document.getElementById("direccion").value
    const observ = document.getElementById("observ").value
    const usRegistro = new Persona(nombre, apellido, telefono, direccion, observ)
    
    localStorage.setItem("registro", JSON.stringify(usRegistro))
})