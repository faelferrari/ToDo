//Selecao de elementos
const botao = document.querySelector('.todo-button')
const listaTodo = document.querySelector('.todo-list')
var i =[];

botao.addEventListener('click',function(e){
    e.preventDefault();
    const item = document.getElementById('todo-text').value  
    
    //Criacao dos elementos
    const liItem = document.createElement('li');
    const divItem= document.createElement('div');
    const checktBnt = document.createElement('button')
    const delBnt = document.createElement('button')

    //cria classe
    liItem.classList.add('todo-item');
    divItem.classList.add('todo-div')
    checktBnt.classList.add('todo-btn-check')
    delBnt.classList.add('todo-btn-del')

    //Escrever no elemento
    liItem.innerHTML=item;
    checktBnt.innerHTML='<i class="fas fa-check"><i>'
    delBnt.innerHTML='<i class="fas fa-trash"><i>'

    //Adota as criancas
    divItem.appendChild(liItem)
    divItem.appendChild(checktBnt)
    divItem.appendChild(delBnt)
    listaTodo.appendChild(divItem)


    saveLocal(item)
    
})

listaTodo.addEventListener('click',deleteCheck)


function deleteCheck(event) {   
    const item = event.target;

    if (item.classList[0] === "todo-btn-del") {
        const todo = item.parentElement;     
        deletLocal(todo) 
        todo.remove()
    }

    if (item.classList[0] === "todo-btn-check") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');        
        localStorage.removeItem("item0")
    }


}

function criaArray(){
    let array 
    if(localStorage.getItem('todo') === null){
        array=[];
    }else{
        array=JSON.parse(localStorage.getItem('todo'));
    }
    return array
}

function saveLocal(item){
    let itemLocal=criaArray();
    itemLocal.push(item);   
    localStorage.setItem('todo',JSON.stringify(itemLocal));
}

function deletLocal(item){
    let itemLocal= criaArray();
    const itemLi = item.children[0].innerText;    
    const itemIndex=itemLocal.findIndex(a=>{
        return a===itemLi
    })
    console.log(itemIndex);
    itemLocal.splice(itemIndex,1)
    localStorage.setItem('todo',JSON.stringify(itemLocal))
}

document.addEventListener("DOMContentLoaded",criaLocal)

function criaLocal(){
    let itemLocal= criaArray();
    itemLocal.forEach(element => {        
        const liItem = document.createElement('li');
        const divItem= document.createElement('div');
        const checktBnt = document.createElement('button')
        const delBnt = document.createElement('button')
    
        //cria classe
        liItem.classList.add('todo-item');
        divItem.classList.add('todo-div')
        checktBnt.classList.add('todo-btn-check')
        delBnt.classList.add('todo-btn-del')
    
        //Escrever no elemento
        liItem.innerHTML=element;
        checktBnt.innerHTML='<i class="fas fa-check"><i>'
        delBnt.innerHTML='<i class="fas fa-trash"><i>'
    
        //Adota as criancas
        divItem.appendChild(liItem)
        divItem.appendChild(checktBnt)
        divItem.appendChild(delBnt)
        listaTodo.appendChild(divItem)
    });
}

