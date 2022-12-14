let a = document.getElementById("container")
let b = document.createElement("h1")
let c = document.createElement("p")
let d = new (Date)
let e = d.getFullYear()
let f = d.getMonth()
let g = d.getDate()
let formEl = document.createElement("form")
let inputEl = document.createElement("input")
let buttonEl = document.createElement("button")
let taskEl = document.createElement("ul")






b.innerText = "Todo List App"
a.appendChild(b)

c.innerHTML = `Date: ${e}-${f}-${g} ${countTasks} tasks left`
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
    let x=inputEl.value
    newTask.className="newTask"
    newTask.innerHTML=x
    console.log(x)
    taskEl.appendChild(newTask)
    event.preventDefault();
}
function countTasks(z){
let y=document.getElementsByTagName(li)
z=y.length
return z
}
