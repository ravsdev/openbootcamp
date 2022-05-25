const botonAlerta = document.getElementById("boton-alerta");
// const botonAlerta = document.querySelector("#boton-alerta");

botonAlerta.addEventListener("click", () => {
    alert("click en el botón");
})

//JQuery
$(() => {
    $("#boton-alerta").click(() => {
        console.log("Hola, estoy utilizando jQuery");
    });
});