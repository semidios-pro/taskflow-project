

# Refactorización y Mejora del Proyecto TaskFlow

## 📌 Objetivo
Revisar y mejorar el código del proyecto TaskFlow aplicando buenas prácticas de desarrollo, refactorización con ayuda de IA y optimización de la estructura del código.

---

## 🔍 Análisis del código original

Durante la revisión del código se detectaron los siguientes aspectos mejorables:

- Existencia de código duplicado (`saveTasks()`, `render()`, `updateStats()`)
- Funciones con múltiples responsabilidades
- Validación insuficiente en el formulario
- Uso de `onclick` en HTML (mala práctica)
- Nombres de variables poco descriptivos
- Ausencia de documentación (JSDoc)

---

## ♻️ Refactorización realizada

Se han aplicado mejoras estructurales y funcionales en el código:

### ✔️ Eliminación de duplicidad
Se creó una función global:

```js
function updateApp() {
  saveTasks();
  renderTasks();
  updateStats();
}

Esto evita repetir código en múltiples funciones.
````
✔️ Separación de responsabilidades

Se han dividido funciones en:

Lógica de negocio (tareas)
Renderizado (DOM)
Almacenamiento (localStorage)


✔️ Mejora de nombres de variables
Antes	Después
input	taskInput
addBtn	addButton
t	task
tasks	tasks (mantenido, correcto)
✔️ Eliminación de onclick

Se sustituyó por addEventListener, mejorando la escalabilidad y buenas prácticas.

🛡️ Validaciones añadidas

Se implementó una validación más completa:
````
function isValidTask(text) {
  if (!text.trim()) {
    alert("La tarea no puede estar vacía");
    return false;
  }

  if (text.length > 100) {
    alert("Máximo 100 caracteres");
    return false;
  }

  return true;
}
````


🔧 Funciones refactorizadas
1. Añadir tarea
````
function handleAddTask() {
  const text = taskInput.value;

  if (!isValidTask(text)) return;

  tasks.push(createTask(text));
  clearInput();
  updateApp();
}
2. Crear tarea
function createTask(text) {
  return {
    id: Date.now(),
    text: text.trim(),
    completed: false
  };
}
3. Cambiar estado de tarea
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  updateApp();
}
4. Eliminar tarea
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  updateApp();
}
5. Renderizado de tareas
function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<div class="empty-message">No hay tareas. ¡Crea una!</div>`;
    return;
  }

  tasks.forEach(task => {
    taskList.appendChild(createTaskElement(task));
  });
}
🧠 Uso de JSDoc
````
Se documentaron funciones clave:
````
/**
 * Crea una nueva tarea
 * @param {string} text
 * @returns {Object}
 */
function createTask(text) {
  ...
}
🧩 Mejora del renderizado
````
Se eliminó el uso de HTML inline con onclick:
````
toggleBtn.addEventListener("click", () => toggleTask(task.id));
deleteBtn.addEventListener("click", () => deleteTask(task.id));
💡 Mejora de estructura (propuesta)
/project
  /js
    app.js
    tasks.js
    ui.js
  /css
    styles.css
  index.html
````
🔄 Revisión manual

Antes de aceptar los cambios generados por IA, se verificó que:

No existen errores en consola
Todas las funcionalidades siguen operativas
El código es más legible y mantenible
💬 Commits realizados
````
git commit -m "refactor: eliminación de código duplicado con updateApp"
git commit -m "feat: validación avanzada de tareas"
git commit -m "refactor: separación de lógica y renderizado"
git commit -m "style: mejora de nombres de variables"
git commit -m "refactor: eliminación de onclick y uso de addEventListener"
git commit -m "docs: añadido JSDoc en funciones principales"
````
🏁 Conclusión

La refactorización ha permitido:

Mejorar la legibilidad del código
Reducir la duplicación
Aplicar buenas prácticas de desarrollo
Aumentar la escalabilidad del proyecto

El uso de herramientas de IA como Cursor ha facilitado la optimización del código, manteniendo siempre una revisión manual final para asegurar la calidad.
