// Selección de elementos clave
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Función para manejar el clic de los botones
const manejarClic = (boton) => {
    const botonApretado = boton.textContent;

    switch (boton.id) {
        case "c":
            pantalla.textContent = "0";
            break;

        case "borrar":
            pantalla.textContent = pantalla.textContent.length === 1 || pantalla.textContent === "Error!"
                ? "0"
                : pantalla.textContent.slice(0, -1);
            break;

        case "igual":
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            break;

        default:
            pantalla.textContent = (pantalla.textContent === "0" || pantalla.textContent === "Error!")
                ? botonApretado
                : pantalla.textContent + botonApretado;
            break;
    }
};

// Añadir eventos de clic a los botones
botones.forEach(boton => {
    boton.addEventListener("click", () => manejarClic(boton));
});
