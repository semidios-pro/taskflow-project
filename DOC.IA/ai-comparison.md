CONCEPTOS FUNDAMENTALES CON LA IA:
SEGUN CHATGPT

🔒 Closures (cierres)
Es cuando una función “recuerda” las variables de fuera aunque ya haya terminado.
👉 Ejemplo simple:

function contador() {
  let numero = 0;

  return function() {
    numero++;
    return numero;
  }
}

const contar = contador();
console.log(contar()); // 1
console.log(contar()); // 2

💡 Aunque contador() ya terminó, la función interna sigue recordando numero.
👉 Idea clave:
Una función guarda el acceso a variables externas.


🔄 Event Loop
Es como el “organizador” de JavaScript.

👉 JavaScript hace una cosa a la vez, pero el event loop:

Maneja tareas
Decide cuándo ejecutar cada cosa

👉 Ejemplo:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

👉 Resultado:

A
C
B

💡 Aunque el setTimeout es 0, va “a la cola”.

👉 Idea clave:
El event loop gestiona cuándo se ejecuta el código asíncrono.


🌐 DOM (Document Object Model)
Es cómo el navegador representa tu HTML como objetos que JavaScript puede usar.

👉 Ejemplo HTML:

<h1 id="titulo">Hola</h1>

👉 JavaScript:

document.getElementById("titulo").textContent = "Hola mundo";

💡 Estás cambiando la página con código.

👉 Idea clave:
El DOM permite modificar la web con JavaScript.


⬆️ Hoisting
Es cuando JavaScript “sube” declaraciones al principio.

👉 Ejemplo:

console.log(x);
var x = 5;

👉 Resultado:

undefined

💡 Internamente hace algo así:

var x;
console.log(x);
x = 5;

👉 Con funciones:

saludar();

function saludar() {
  console.log("Hola");
}

✔️ Esto funciona por hoisting.
👉 Idea clave:Las variables y funciones se “declaran” antes de ejecutarse.


CONCEPTOS FUNDAMENTALES CON LA IA:
SEGUN CLAUDE

Closures: 
son funciones que "recuerdan" el entorno léxico en el que fueron creadas, incluso después de que ese entorno haya dejado de estar activo. Esto permite encapsular estado privado sin exponer variables al exterior, un patrón muy utilizado en módulos y funciones de fábrica.

El Event Loop:
es el mecanismo que hace posible la asincronía en JavaScript a pesar de ser un lenguaje de un solo hilo. Coordina la pila de llamadas (call stack), la cola de tareas (task queue) y las microtasks, ejecutando código de forma no bloqueante.

El DOM:
(Document Object Model) es la representación en memoria del documento HTML como un árbol de nodos. El navegador lo construye al cargar la página y JavaScript puede manipularlo para leer o modificar la estructura, los estilos y el contenido de manera dinámica.

Hoisting:
es el comportamiento por el cual las declaraciones de variables (var) y funciones son "elevadas" al inicio de su ámbito antes de la ejecución. Las variables declaradas con var se hoistean pero con valor undefined; las funciones declaradas con function se 


hoistean completamente. let y const también se hoistean pero quedan en la Temporal Dead Zone hasta su declaración.

