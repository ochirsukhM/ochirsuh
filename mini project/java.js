let a = document.getElementById("container")
let b = document.createElement("h1")
let c = document.createElement("p")
let d = new (Date)
let e = d.getFullYear()
let f = d.getMonth()+1
let g = d.getDate()
let formEl = document.createElement("form")
let inputEl = document.createElement("input")
let buttonEl = document.createElement("button")
let taskEl = document.createElement("ul")




b.innerText = "Todo List App"
a.appendChild(b)

c.innerHTML = `Date: ${e}-${f}-${g} ${document.getElementsByTagName("li").length} tasks left`
a.appendChild(c)

taskEl.className = "task"

inputEl.placeholder = "Input your task name"
inputEl.type = "text"
buttonEl.innerHTML = "+add"
a.appendChild(formEl)
formEl.appendChild(inputEl)
formEl.appendChild(buttonEl)
let listEl = document.createElement("h1")
listEl.innerText = `Lists`
a.appendChild(listEl)
inputEl.id = "input"
a.appendChild(taskEl)
buttonEl.addEventListener("click", addTask)

function addTask(event) {
   
    let newTask=document.createElement("li")
    let editBtn=document.createElement("button")
    let checkBtn=document.createElement("button")
    let deleteBtn=document.createElement("button")
    let editEl=document.createElement("img")
    let checkEl=document.createElement("img")
    let deleteEl=document.createElement("img")
    
    editEl.src="edit.svg"
    checkEl.src="check.png"
    deleteEl.src="delete.png"
    
    editEl.className="icons"
    checkEl.className="icons"
    deleteEl.className="icons"
    
    let x=inputEl.value
    newTask.className="newTask"
    newTask.innerHTML=x
    
    taskEl.appendChild(newTask)
    newTask.appendChild(editBtn)
    editBtn.appendChild(editEl)
    newTask.appendChild(checkBtn)
    checkBtn.appendChild(checkEl)
    newTask.appendChild(deleteBtn)
    deleteBtn.appendChild(deleteEl)

    deleteBtn.addEventListener("click",deleteTask)
    function deleteTask(event){
        taskEl.removeChild(newTask)
        event.preventDefault()
    }
    inputEl.value=""
    event.preventDefault();
}
function countTasks(){
let y=document.getElementsByTagName(li)
z=y.length
return z
}


