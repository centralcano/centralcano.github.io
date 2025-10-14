// ########################
//
// allora
//
//
// godo funziona cristo
//
//
// da fare: 
//
// - funzione di cashout da aggiungere + il pulsante non si disattiva all'apertura pagina per qualche motivo
// 
//
// ########################



var numeroBombe = 25
var gameStarted = false;
var credito = 500;

document.getElementById('creditoDisplay').textContent = credito;
document.getElementById('vincitaDisplay').textContent = 0;

function generaGriglia() {

      for (let i = 0; i < numeroBombe; i++) {
            let casella = document.createElement('div');
            casella.classList.add('casella');
            document.querySelector('.container-grid').appendChild(casella)
      }

}


var boom = document.getElementById('boom');
var bell = document.getElementById('bell');

function playsound(sound) {
      sound.currentTime = 0;
      sound.play()
}


generaGriglia();

const puntaBtn = document.getElementById('punta');
const cashoutBtn = document.getElementById('cashout');
const caselle = document.querySelectorAll('.casella');


reset();

var puntata = 0;
puntaBtn.addEventListener('click', function() {

      if (credito <= 0) {
            alert("CREDITO INSUFFICIENTE, RICARICA!");
            return;
      } else if (document.querySelector('input').value > credito) {
            alert("NON PUOI PUNTARE PIÙ DI QUANTO HAI!");
            return;
      }

      reset();

      gameStarted = true;
      
      puntata = document.querySelector('input').value;
      console.log("puntata:" + puntata);
      
      credito -= puntata;
      document.getElementById('creditoDisplay').textContent = credito;

      puntata *= 0.3

      puntaBtn.disabled = true;
      cashoutBtn.disabled = false;
      document.querySelector('input').disabled = true;
      
      // scelta delle bombe

      bombe = [];
      for (let i = 0; i < 3; i++) {
            let bomba = Math.floor(Math.random() * numeroBombe);
            while (bombe.includes(bomba)) {
                  bomba = Math.floor(Math.random() * numeroBombe);
            }
            bombe.push(bomba);
      }
      console.log("bombe: " + bombe);

      
      caselle.forEach(casella => {
            casella.classList.add('attiva');
            casella.addEventListener('click', function() {
                  if (gameStarted == false || casella.classList.contains('libera')) {
                        return;
                  } else {
                        console.log("casella cliccata");

                        if (bombe.includes(Array.from(caselle).indexOf(casella))) {


                              
                              puntata = 0;
                              
                              document.querySelector('input').disabled = false;
                              scopriTutto(bombe);
                              playsound(boom);


                        } else {
                              casella.classList.remove('attiva');
                              casella.classList.add('libera');
                              casella.classList.add('liberaAnimazione');
                              casella.textContent = "💎"
                              puntata = Math.floor(puntata * 1.2);
                              document.getElementById('vincitaDisplay').textContent = puntata;
                              playsound(bell)
                        }
                  }
            })
      });
})
cashoutBtn.addEventListener('click', function() {
      if (!gameStarted) {
            return;
      } else {
            alert("HAI INCASSATO " + document.getElementById('vincitaDisplay').textContent + " CREDITI");
            credito += parseInt(document.getElementById('vincitaDisplay').textContent);
            document.getElementById('creditoDisplay').textContent = credito;
            scopriTutto(bombe);
      }
})
function reset() {

      caselle.forEach(casella => {
            casella.classList.remove('attiva');
            casella.classList.remove('libera');
            casella.classList.remove('liberaAnimazione')
            casella.classList.remove('bomba');
            casella.textContent = "";
      });
      puntaBtn.disabled = false;
      cashoutBtn.disabled = true;
      document.getElementById('vincitaDisplay').textContent = 0;
      document.querySelector('input').disabled = false;

      gameStarted = false;
      var bombe = [];
}
function scopriTutto(bombe) {

      caselle.forEach(casella => {
            if (bombe.includes(Array.from(caselle).indexOf(casella))) {
                  casella.classList.remove('attiva');
                  casella.classList.remove('libera');
                  casella.classList.add('bomba');
                  casella.textContent = "💣";
            } else {
            casella.classList.add('libera');
            }
            casella.classList.remove('attiva');
      })
      puntaBtn.disabled = false;
      cashoutBtn.disabled = true;
      gameStarted = false;
      credito += puntata;
      document.getElementById('creditoDisplay').textContent = credito;
      document.getElementById('vincitaDisplay').textContent = 0;
      document.querySelector('input').disabled = false;

}
