//Generador de Numeros
let tiemporegresivo = null;
let tarjetadestapada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 50;
let timerinicial=30;
let mostrarmovimientos = document.getElementById("movimiento");
let mostraraciertos = document.getElementById("aciertos");
let mostrartiempo = document.getElementById("t-restante");
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});
console.log(numeros);

function contartiempo() {
  tiemporegresivo = setInterval(() => {
    timer--;
    mostrartiempo.innerHTML = `Tiempo ${timer} Segundos`;
    if (timer == 0) {
      //se detiene
      clearInterval(tiemporegresivo);
      bloqueartarjetas();
    }
  }, 1000);
}
function bloqueartarjetas(){
for(let i=0;i<=15;i++){
let tarjetabloqueado=document.getElementById(i);
tarjetabloqueado.innerHTML=numeros[i];
tarjetabloqueado.disabled=true;
}

}

function destapar(id) {
  if (temporizador == false) {
    contartiempo();
    temporizador = true;
  }
  tarjetadestapada++;
  console.log(tarjetadestapada);
  if (tarjetadestapada == 1) {
    //id html
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;
    //desabilitar el primero
    tarjeta1.disabled = true;
  } else if (tarjetadestapada == 2) {
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;
    tarjeta2.disabled = true;
    movimientos++;
    mostrarmovimientos.innerHTML = `Movimientos :${movimientos}`;

    if (primerResultado == segundoResultado) {
      //son iguales se iguala a 0;
      tarjetadestapada = 0;
      aciertos++;
      mostraraciertos.innerHTML = `Aciertos :${aciertos}`;
      if (aciertos == 8) {
        clearInterval(tiemporegresivo);
        mostraraciertos.innerHTML = `Aciertos:${aciertos}😈`;
        mostrarmovimientos.innerHTML = `Movimientos:${movimientos}😈`;
        mostrartiempo.innerHTML=`Fantastico solo Demorastes ${timerinicial- timer} segundos`
      }
    } else {
      setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetadestapada = 0;
      }, 800);
    }
  }
}
//Prueba de





