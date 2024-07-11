let button=document.getElementById('add');
let input=document.getElementById('input');
let todoList=document.getElementById('todoList');
//local storage,cookies(old model)
let todos=[];
window.onload=()=>{//loading the windows everytime
 todos=JSON.parse(localStorage.getItem('todos'))||[];//we check the previous todos are stored in array if empty then declare a array []
  todos.forEach(todo=>addtodo(todo));
}

button.addEventListener('click',()=>{
    todos.push(input.value);//push into array
      //storing to local
    localStorage.setItem('todos',JSON.stringify(todos));//(key,value)value is convert into string using json stringify
   // console.log(todos);
    addtodo(input.value);//function call
    input.value='';//make a input field empty after passing the value of input
})

function addtodo(todo){
 let para= document.createElement('p');//create paragraph tag
 para.innerText=todo;//set a value into paragraph
  todoList.appendChild(para);//attaching paragraph into div tag  
  para.addEventListener('click',()=>{
      para.style.textDecoration='line-through';
      remove(todo);//after the line through we ca remove todo from array becz this work is done
  })
  para.addEventListener('dblclick',()=>{
    todoList.removeChild(para);
    remove(todo);//after the line through we ca remove todo from array becz this work is done
})
}

function remove(todo){
    let index=todos.indexOf(todo);//get the index
    if(index>-1){
      todos.splice(index,1);//splice using for remove index and only one element
    }
      localStorage.setItem('todos',JSON.stringify(todos));
}


