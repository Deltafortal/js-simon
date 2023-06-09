
// Prendi tutti gli elementi necessari dal DOM
const timerPlaceHolder = document.getElementById('timer')
const numbersList = document.getElementById('numbers')




// Definisci le variabili necessarie
const numberSlots = 5;
const totalTimer = 10;
let time = totalTimer;
let numbers = [];



// Genera 5 numeri casuali

for (let i = 0; i < 5; i++) {

    const random = Math.floor(Math.random() * 99) + 1;
    numbers.push(random);
}


// Aggiungi il Countdown

const timer = setInterval(function(){
    
    time--
    if(time <= 0) {
        clearInterval(timer)
        console.log('stopped')
    }
    console.log(time)

}, 1000)