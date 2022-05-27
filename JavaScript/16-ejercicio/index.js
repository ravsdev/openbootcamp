const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");
const elemento_fantasma = document.querySelector(".imagen-fantasma");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
        event.dataTransfer.setDragImage(elemento_fantasma, 50, 25);
    });

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");
    });

})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault();
    papelera.classList.add("imagen-fantasma-delete");
});

papelera.addEventListener("dragleave", event => {
    papelera.classList.remove("imagen-fantasma-delete");
});

papelera.addEventListener(("drop"), event => {
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    parrafo.remove();
    papelera.classList.remove("imagen-fantasma-delete");
});