var listenElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


//Garante que saia pelo menos uma lista vazia se caso não encontrar o localStrage
var todos = JSON.parse(localStorage.getItem('list_todos') || []);

//Renderizar ToDos
function renderTodos(){
    //Limpa a lista inicialmente
    listenElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemetent = document.createElement('a');
        linkElemetent.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElemetent.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        var linkText = document.createTextNode('Excluir');
        linkElemetent.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemetent);

        listenElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    if(inputElement.value === '')
        ; //Do nothing
    else{
        var todoText = inputElement.value;

        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        saveToStroage();
    }
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStroage();
}

function saveToStroage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}