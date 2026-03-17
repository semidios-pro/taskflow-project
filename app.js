const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const darkModeBtn = document.getElementById("darkModeBtn");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");
const percentage = document.getElementById("percentage");
const progressFill = document.getElementById("progressFill");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Guardar tareas
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Actualizar estadísticas
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percentValue = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalCount.textContent = total;
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
  percentage.textContent = percentValue;
  progressFill.style.width = percentValue + "%";
}

// Añadir tarea
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  
  if (text === "") {
    alert("Escribe una tarea");
    return;
  }

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });

  input.value = "";
  input.focus();
  saveTasks();
  render();
  updateStats();
});

// También añadir con Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Completar tarea
function toggleTask(id) {
  tasks = tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTasks();
  render();
  updateStats();
}

// Eliminar tarea
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  render();
  updateStats();
}

// Renderizar lista
function render() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = '<div class="empty-message">No hay tareas. ¡Crea una!</div>';
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    
    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleTask(${task.id})">${task.completed ? "Pendiente" : "Hecho"}</button>
        <button onclick="deleteTask(${task.id})">Borrar</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Modo oscuro
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
  darkModeBtn.textContent = isDark ? "☀️ Claro" : "🌙 Oscuro";
});

// Cargar modo oscuro guardado
function loadDarkMode() {
  const isDark = JSON.parse(localStorage.getItem("darkMode")) || false;
  if (isDark) {
    document.body.classList.add("dark");
    darkModeBtn.textContent = "☀️ Claro";
  } else {
    darkModeBtn.textContent = "🌙 Oscuro";
  }
}

// Inicializar
loadDarkMode();
render();
updateStats();
input.focus();