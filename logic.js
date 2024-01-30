let channels = 52
const clips = []

requestAnimationFrame(actualizarCadaFrame);

function actualizarCadaFrame(){

    let fecha = new Date();
    
    let horas = ("0" + fecha.getHours()).slice(-2);
    let minutos = ("0" + fecha.getMinutes()).slice(-2);
    let segundos = ("0" + fecha.getSeconds()).slice(-2);
    let milisegundos = fecha.getMilliseconds();
    let fps = 30;
    let frames = ("0" + Math.floor((milisegundos / 1000) * fps)).slice(-2);
    
    let horaFormateada = `${horas}:${minutos}:${segundos}:${frames}`;
    
    let textohora = document.getElementById("hora")
    textohora.textContent = horaFormateada
    //console.log(horaFormateada);
    
    requestAnimationFrame(actualizarCadaFrame);
}
  

var objetos = document.querySelectorAll('.objeto');
var areaDestino = document.getElementById('areaDestino');

var mensajeOpciones = document.getElementById('mensajeOpciones');



var limiteDerecho = window.innerWidth / 3; // Límite en la mitad derecha de la pantalla

objetos.forEach(function(objeto) {
  // Variables para el seguimiento del estado del arrastre
  var isDragging = false;
  var offsetX, offsetY;

  objeto.addEventListener('mousedown', function(event) {
    isDragging = true;

    // Calcular la posición inicial del objeto en relación con la posición del ratón
    offsetX = event.clientX - objeto.getBoundingClientRect().left;


    // Cambiar el color del objeto al ser agarrado
    objeto.style.backgroundColor = '#dddd';
  });

  document.addEventListener('mousemove', function(event) {
    if (isDragging) {
      // Calcular la nueva posición del objeto
      var nuevaX = event.clientX - offsetX;
      
      // Aplicar restricción al límite derecho
      if (nuevaX < limiteDerecho) {
        objeto.style.left = limiteDerecho + 'px';
        mostrarOpciones();
      } else {
        objeto.style.left = nuevaX + 'px';
      }

      objeto.style.top = event.clientY - offsetY + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;

      // Restaurar el color original del objeto al soltarlo
      objeto.style.backgroundColor = '#cccccc';

      // Verificar si el objeto está dentro del área de destino
      if (
        objeto.getBoundingClientRect().left >= areaDestino.getBoundingClientRect().left &&
        objeto.getBoundingClientRect().right <= areaDestino.getBoundingClientRect().right &&
        objeto.getBoundingClientRect().top >= areaDestino.getBoundingClientRect().top &&
        objeto.getBoundingClientRect().bottom <= areaDestino.getBoundingClientRect().bottom
      ) {
        // El objeto está dentro del área de destino, puedes realizar acciones adicionales aquí
        console.log('Objeto dentro del área de destino');
      }
    }
  });
});

var miDiv = document.getElementById('objeto1');

// Cambiar el cursor a una mano abierta cuando pasa sobre el div
miDiv.addEventListener('mouseenter', function() {
  miDiv.style.cursor = 'grab';
});

// Cambiar el cursor a una mano cerrada mientras se mantiene presionado el botón izquierdo del mouse
miDiv.addEventListener('mousedown', function() {
  miDiv.style.cursor = 'grabbing';
});

// Restaurar el cursor a una mano abierta cuando se suelta el botón izquierdo del mouse
miDiv.addEventListener('mouseup', function() {
  miDiv.style.cursor = 'grab';
});

// Restaurar el cursor a su estado predeterminado cuando sale del div
miDiv.addEventListener('mouseleave', function() {
  miDiv.style.cursor = 'pointer';
});

function mostrarOpciones() {
  mensajeOpciones.style.display = 'block';
}

function ocultarOpciones() {
  mensajeOpciones.style.display = 'none';
}

function ajustarLimite() {
  ocultarOpciones();
  objetos.forEach(function(objeto) {
    objeto.style.left = limiteIzquierdo + 'px';
  });
}

let ejemplo = document.getElementById("example")
ejemplo.addEventListener("dblclick", () => [
  aparecejordania()
])

let ch2 = document.getElementById("vacio")
ch2.addEventListener("contextmenu", () => {
  event.preventDefault()
  eventconfiON()
})

function eventconfiON(){
  let dialogo = document.getElementById("ventanadialogograbacion")
  dialogo.style.display = 'block';
}

function eventconfiOFF(){
  let dialogo = document.getElementById("ventanadialogograbacion")
  dialogo.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
  // Verificar si la tecla presionada es la tecla Escape
  if (event.key === 'Escape') {
    eventconfiOFF()
    ocultarOpciones()
    jordaniaOFF()
  }
});

let cancel = document.getElementById("cancel")
cancel.addEventListener("click", () => {
  eventconfiOFF()
  ocultarOpciones()
  jordaniaOFF()
})

function aparecejordania(){
  let jordania = document.getElementById("jordania")
  jordania.style.display = "block"
}

function jordaniaOFF(){
  let jordania = document.getElementById("jordania")
  jordania.style.display = "none"
}