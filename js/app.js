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

  /*Versión 0.0.2:Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada. Mostrar un texto de "Añadir una tarea" dentro de la lista.*/
  boton.addEventListener("click", saveEvent);
  function saveEvent(event){
    event.preventDefault();
    if(text.value){
      boxForm.classList.toggle("none");
      var title = text.value;
      var boxTitle = document.createElement("div");
      boxTitle.textContent = title;
      boxTitle.classList.add("bt");
      container.appendChild(boxTitle);

      var linkTask = document.createElement("input");
      linkTask.setAttribute("placeholder", "Añadir una tarea...");
      linkTask.classList.add("linkTask");
      container.appendChild(linkTask);
    }

    /*Versión 0.0.3:Al dar click en "Añadir una tarea", deberá mostrar un formulario con un textarea y un botón que diga "Añadir".*/
      linkTask.addEventListener("click", addTareas);
      function addTareas(event){
      linkTask.classList.toggle("none");

      var form = document.createElement("form");
      container.appendChild(form);

      var task = document.createElement("textarea");
      task.classList.add("newtask");
      form.appendChild(task);

      var taskBtn = document.createElement("button");
      taskBtn.setAttribute("id", "btn");
      taskBtn.textContent = "Añadir";


      taskBtn.classList.add("button");
      taskBtn.classList.add("second");
      form.appendChild(taskBtn);

      /*Versión 0.0.4:Poner focus al input al dar click en "Agregar nueva tarea". Al dar click en el botón de "Añadir", deberá aparecer el texto de la tarea debajo del título de la lista, y Versión 0.0.5:Mostrar el formulario nuevamente debajo de la última tarea añadida.*/
      task.focus();

      taskBtn.addEventListener("click", newHomework);

      function newHomework (event){
        event.preventDefault();
        if(task.value){
          var titleTask = document.createElement("div");
          titleTask.textContent = task.value;
          titleTask.classList.add("bt-1");
          container.appendChild(titleTask);
          container.appendChild(form);
          task.value = "";
          task.focus();
        }
      }
    }
  }
}
