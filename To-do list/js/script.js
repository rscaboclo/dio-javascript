const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks"); // Referencia onde será incluído os novos elementos.

// Função para pegar o valor submetido no form quando o botão é clicado.
form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById("task-input");
    addTask(inputField.value);
    form.reset();
}

function addTask(description) {
    const taskContainer = document.createElement("div"); // Criação da Div
    const newTask = document.createElement("input"); // Criação do Input
    const taskLabel = document.createElement("label"); // Criação do Label 
    const taskDescriptionNode = document.createTextNode(description); // Atribuição do valor recebido pelo input do form

    newTask.setAttribute("type", "checkbox"); // Atribuição valor a atributos da tag
    newTask.setAttribute("name", description); // Atribuição valor a atributos da tag
    newTask.setAttribute("id", description); // Atribuição valor a atributos da tag

    taskLabel.setAttribute("for", description); // Atribuição valor a atributos da tag

    

    taskContainer.classList.add("task-item"); // Atribui classe a div criada

    taskLabel.appendChild(taskDescriptionNode); // Atribuição texto no Label

    taskContainer.appendChild(newTask); // Cria elementos dentro da pagina HTML
    taskContainer.appendChild(taskLabel); //Cria elementos dentro da pagina HTML

    taskList.appendChild(taskContainer);
}