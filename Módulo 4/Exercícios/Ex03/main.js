var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('button');
var listEelement = document.querySelector('ul');

buttonElement.onclick = buscar;

// var getRepositorys = function (addr) {
//     return new Promise(function (resolve, reject) {
//         console.log(this.addr)
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', this.addr);
//         xhr.send(null);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//                 else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }
function notFound(error) {
    listEelement.innerHTML = '';
    var item = document.createElement('li');
    var notFound = document.createTextNode(error);
    item.appendChild(notFound);
    listEelement.appendChild(item);
}

function carregando() {
    listEelement.innerHTML = '';
    var item = document.createElement('li');
    var loading = document.createTextNode('Carregando...');
    item.appendChild(loading);
    listEelement.appendChild(item);
}

function imprimir(response) {
    // console.log(response.data)
    listEelement.innerHTML = '';
    for(repos of response.data){
        // console.log(repos);
        var item = document.createElement('li');
        var nomeRepo = document.createTextNode(repos.name);
        item.appendChild(nomeRepo);
        listEelement.appendChild(item);
    }

}

function buscar() {
    addr = ('https://api.github.com/users/' + inputElement.value + '/repos');

    carregando();

    axios.get(addr)
        .then(function(response){
            imprimir(response);   
        })
        .catch(function(error){
            notFound(error);
        });
}



