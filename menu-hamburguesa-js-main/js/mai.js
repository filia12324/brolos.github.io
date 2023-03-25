const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const imagenContenedor = document.querySelector("#imagen-contenedor");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    imagenContenedor.classList.add("ocultar");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    imagenContenedor.classList.remove("ocultar");
});
