// evento de adicionar tarefa:
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (e) {
    // nao enviar formulario para backend:
    e.preventDefault();
    
    // adicionar tarefa:
    addTask();
});



// funcao que adiciona tarefa:
function addTask() {
    // titulo da tarefa:
    const titulo = document.querySelector("#task-title").value;

    if(titulo){
        // clonar o template:
        var template = document.querySelector(".template");

        // clonar o html em uma nova variavel:
        const newTask = template.cloneNode(true);
        
        // adicionar titulo:
        newTask.querySelector(".task-title").textContent = titulo;

        // remover classes:
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        
        // adcionar tarefa na lista:
        var ul = document.querySelector("#task-list");        
        ul.appendChild(newTask);

        // adicionar evento de remover:
        const removeBtn = newTask.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function (e) {
            // console.log("removendo");
            removeTask(newTask);
        });

        // adicionar evento de tarefa concluida:
        const doneBtn = newTask.querySelector(".done-btn");
        doneBtn.addEventListener("click", function (e) {
            completeTask(this);
        });


        // limpar texto:
        document.querySelector("#task-title").value = "";
    }
}

// funcao de remover:
function removeTask(task) {
    task.remove(true);
}

// funcao de completar:
function completeTask(btn) {
    // toggle: verifica se a classe está no elemento. remove se estiver, senao adicionar
    btn.parentNode.classList.toggle("done");

}