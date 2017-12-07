/*Declaracion de variables*/
var addListConteiner = document.getElementById("addlist-Conteiner");
var listConteiner = document.getElementById("list-Conteiner");
var mainList = document.getElementById("main-list");

/*Evento para agregar Lista*/

mainList.addEventListener("click", listOpen);
function listOpen(event) {
  document.getElementById("main-list").style.display = "none";

  var formOfList = document.createElement("div");
  formOfList.setAttribute("id","formbox");
  formOfList.classList.add("form");
  addListConteiner.appendChild(formOfList);

  var listNew = document.createElement("input");
  listNew.setAttribute("placeholder", "Añadir una lista...");
  listNew.setAttribute("id","listNew");

/*Guardar lista (Boton de Guardar)*/
  var saveBtn = document.createElement("button");
  saveBtn.classList.add("saveBtn");
  saveBtn.setAttribute("id","saveBtn");

/*Cerrar lista  (Boton Cerra lista)*/
  var closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fa fa-times");
  closeBtn.addEventListener("click", closeListBtn);

/*Evento para cuando se cierra*/
  function closeListBtn(event) {
    addListConteiner.removeChild(formOfList);
    addListConteiner.appendChild(mainList);
    document.getElementById("main-list").style.display = "inline-block"; //aparece la ventana
  }

  formOfList.appendChild(listNew);
  formOfList.appendChild(saveBtn);
  formOfList.appendChild(closeBtn);
  saveBtn.textContent = "Guardar";
  listNew.focus();
  saveBtn.addEventListener("click", save);

  /*Versión 0.0.2  --- Guardar y añadir---*/

  function save(event) {
    var title = listNew.value;
    var lista = document.createElement("div");
    var text = document.createElement("div");
    var task = document.createElement("div");

    lista.classList.add("lista");
    task.classList.add("task");
    text.classList.add("title");
    text.innerText = title;
    task.innerHTML = "Añadir una tarea...";
    lista.appendChild(text);
    lista.appendChild(task);
    listConteiner.appendChild(lista);
    listNew.value= "";
    listConteiner.appendChild(lista);
    task.addEventListener("click", listaTask);

    /*Versión 0.0.3  "Añadir una tarea"*/

    function listaTask(event) {
      var taskForm = document.createElement("div");
      taskForm.classList.add("taskForm");

      var taskName = document.createElement("textarea");
      taskName.classList.add("taskName");

      var taskSave = document.createElement("button");
      taskSave.classList.add("taskSave");
      taskSave.textContent = "Añadir";

      var taskClose = document.createElement("i");
      taskClose.setAttribute("class", "fa fa-times");
      taskClose.setAttribute("aria-hidden", "true");
      taskClose.addEventListener("click", close);


      function close(event) {
        lista.removeChild(taskForm);
        lista.appendChild(task);
      }

      taskForm.appendChild(taskName);
      taskForm.appendChild(taskSave);
      taskForm.appendChild(taskClose);

      lista.appendChild(taskForm);
      lista.removeChild(task);

/*Versión 0.0.4. (Agregar nueva tarea)*/

      taskName.focus();
      taskSave.addEventListener("click", listSave);

      function listSave(event) {
        var titleTask = taskName.value;
        var addTask = document.createElement("div");
        addTask.classList.add("task");
        addTask.innerHTML = titleTask;

        lista.appendChild(addTask);
        lista.insertBefore(addTask,taskForm);
        taskName.value = "";
        taskName.focus();
      }
    }
  }
}
