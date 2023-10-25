const SHOW_TEXT = document.getElementById("mostrarTexto");
const FORMULARIO = document.getElementById("formulario");
const TEXTO = document.getElementById("texto");

SHOW_TEXT.addEventListener("click", () => {
  TEXTO.innerText = "existosa";
  FORMULARIO.showModal();
});
