const textos = ['El lenguaje entendido por una computadora se conoce como codigo maquina', 'la programacion refiere a la accion de crear programas o aplicaciones a traves del desarrollo de un codigo fuente, que se basa en el conjunto de instrucciones que sigue el ordenador para ejecutar un programa', 'Hay mas formas de vida viviendo en tu piel que humanos en la Tierra', 'ProgramandoPy', 'Preparados para programar un PARAGUAY mejor' ];
// almacena la lista de palabras y el índice de la palabra que el jugador está escribiendo actualmente
let palabras = ['El lenguaje entendido por una computadora se conoce como codigo maquina', 'la programacion refiere a la accion de crear programas o aplicaciones a traves del desarrollo de un codigo fuente, que se basa en el conjunto de instrucciones que sigue el ordenador para ejecutar un programa', 'Hay mas formas de vida viviendo en tu piel que humanos en la Tierra', 'ProgramandoPy', 'Preparados para programar un PARAGUAY mejor' ];
let palabraIndice = 0;
// la hora de inicio
let startTime = Date.now();
const textoElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('texto-tipeado');
document.getElementById('inicio').addEventListener('click', () => {
    const textoIndice = Math.floor(Math.random() * textos.length);
    const texto = textos[textoIndice];
    palabras = texto.split(' ');
    palabraIndice = 0;
    const spanPalabras = palabras.map(function(palabra) { return `<span>${palabra} </span>`});
    // leer sobre las sgtes dos lineas 
    //span nos permite resaltar la palabra 
    textoElement.innerHTML = spanPalabras.join('');
    textoElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
    // kesesoooo
  typedValueElement.value = '';
  //FOCUS PARA CONCENTRAR
  typedValueElement.focus(); 
  startTime = new Date().getTime();
});
typedValueElement.addEventListener('input', () => {   
  const currentWord = palabras[palabraIndice];
  const typedValue = typedValueElement.value;
  //=== igualdad estricta 
  if (typedValue === currentWord && palabraIndice === palabras.length - 1) {
    const elapsedTime = new Date().getTime() - startTime;
    const message = `FELICIDADES! Finalizaste en ${elapsedTime / 1000} segundos.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    typedValueElement.value = '';
    palabraIndice++;
    for (const palabraElement of textoElement.childNodes) {
      palabraElement.className = '';
    }
    textoElement.childNodes[palabraIndice].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = '';
  } else {
    typedValueElement.className = 'error';
    const message1='Vuelve a Intentarlo!';
    message1Element.innerText= message1;
  }
});
