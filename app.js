const form = document.getElementById("task-form")
const input = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

const total = document.getElementById("total")
const completed = document.getElementById("completed")
const pending = document.getElementById("pending")

let tasks = []

form.addEventListener("submit", function(e){

e.preventDefault()

const task = {
id: Date.now(),
title: input.value,
completed:false
}

tasks.push(task)

input.value=""

renderTasks()

})

function renderTasks(){

taskList.innerHTML=""

tasks.forEach(task =>{

const li = document.createElement("li")

const left = document.createElement("div")
left.classList.add("task-left")

const checkbox = document.createElement("input")
checkbox.type="checkbox"
checkbox.checked = task.completed

checkbox.addEventListener("change",()=>{

task.completed = checkbox.checked
renderTasks()

})

const span = document.createElement("span")
span.textContent = task.title

if(task.completed){
span.classList.add("completed")
}

left.appendChild(checkbox)
left.appendChild(span)

const deleteBtn = document.createElement("button")
deleteBtn.textContent="Eliminar"
deleteBtn.classList.add("delete-btn")

deleteBtn.addEventListener("click",()=>{

tasks = tasks.filter(t => t.id !== task.id)
renderTasks()

})

li.appendChild(left)
li.appendChild(deleteBtn)

taskList.appendChild(li)

})

updateStats()

}

function updateStats(){

const totalTasks = tasks.length

const completedTasks = tasks.filter(t => t.completed).length

const pendingTasks = totalTasks - completedTasks

total.textContent = totalTasks
completed.textContent = completedTasks
pending.textContent = pendingTasks

}

