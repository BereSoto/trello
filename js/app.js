window.addEventListener("load", begin);

var container = document.getElementById("content-list")
var list = document.getElementById("addList");
var boxForm = document.getElementById("form");
var text = document.getElementById("list");
var boton = document.getElementById("btn");

function begin(){
  /*Versión 0.0.1:Se mostrará el texto "Añadir una lista ...". Al hacer click se debe ocultar el texto y mostrar un formulario. El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.*/
  list.addEventListener("click", anexarLista);
  function anexarLista() {
    list.classList.toggle("none");
    boxForm.classList.toggle("none");
    text.focus();
  }
