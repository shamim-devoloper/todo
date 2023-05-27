const todoInput = document.querySelector('.todoInput')
const form = document.querySelector('.form')
const Todos = document.querySelector('.Todos ul')


const addTodo = (text) => {
    if(text){
       const newTodo = `
       <li class="sTodo">
          <span>${text}</span>
          <div class="icons">
          <i class="fa-solid fa-pen-to-square editTodo"></i>
          <i class="fa-solid fa-trash-can deleteTodo"></i>
          </div>
          </li>
       `
       Todos.innerHTML += newTodo
       todoInput.value =''
       todoInput.focus()

    } 
}
const editTodo = (text) => {
    let newTodo = prompt('Edit todo',text.trim())
    if(!newTodo){
        let newTodo = prompt('Edit todo',text.trim())

    }else{
        return newTodo
        
       
    }
}

    Todos.addEventListener('click',(e) => {
       if(e.target.classList.contains('sTodo')){
        e.target.classList.toggle('completeTodo')
       }

       if(e.target.nodeName === "SPAN"){
        e.target.classList.toggle('completeTodo')
       }
       if(e.target.classList.contains('deleteTodo')){
        e.target.parentElement.parentElement.remove()
       }

       if(e.target.classList.contains('editTodo')){
     const edittedTodo = editTodo(e.target.parentElement.parentElement.innerText)
     e.target.parentElement.parentElement.innerHTML =`
     <span>${edittedTodo}</span>
          <div class="icons">
          <i class="fa-solid fa-pen-to-square editTodo"></i>
          <i class="fa-solid fa-trash-can deleteTodo"></i>
     </div>
     `
      
       }

    })
    


form.addEventListener('submit',(e) => {
    e.preventDefault()
    addTodo(todoInput.value)
})


