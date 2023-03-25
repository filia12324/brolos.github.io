const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const imagen = document.querySelector("#imagen");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    imagen.classList.add("oculto");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    imagen.classList.remove("oculto");
})
