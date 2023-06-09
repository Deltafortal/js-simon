
// Prendi tutti gli elementi necessari dal DOM
const timerPlaceHolder = document.getElementById('timer')
const numbersList = document.getElementById('numbers')
const answer = document.getElementById('answer')




// Definisci le variabili necessarie
const numberSlots = 5;
const totalTimer = 30;
let time = totalTimer;
let numbers = [];
let answered = 0;
let utentAnswer = 0;

timerPlaceHolder.innerText = totalTimer;



// ! FUNZIONI -------------------------------------------------------------

const removeAnswered = () => {
    for(let i = 0; i < numberSlots; i++) {

        if(numbers.includes(utentAnswer)) {
            delete numbers[i]
        }
        
    }
}

// ! -------------------------------------------------------------- 




// Genera 5 numeri casuali

for (let i = 0; i < numberSlots; i++) {

    const random = Math.floor(Math.random() * 99) + 1;
    numbers.push(random);
    numbersList.innerHTML += `<li>${random}`; 
}




// Aggiungi il Countdown

const timer = setInterval(function(){
    
    time--
    timerPlaceHolder.innerText = time;
    if(time <= 0) {
        clearInterval(timer)
        timerPlaceHolder.innerText = 'Time is Over!!!';

        // Prompt -----------------------
        setTimeout(function(){
            
            for(let i = 0; i < numberSlots; i++) {

                utentAnswer = parseInt(prompt('Inserisci un numero da 1 a 99'))
                if(numbers.includes(utentAnswer)) {
                    removeAnswered();
                    answered += 1;
                } else {
                    
                }
            }

            if(answered === numberSlots) {
                console.log('VINTOOO')
                answer.innerText = 'Hai una memoria SPAZIALE!!'
            } else {
                answer.innerText = 'Oh no, la tua memoria fa schifo.....'
                answer.style.color = "red";
            }


        } , 1000)
        // -----------------------------
        
    }
    console.log(time)


}, 1000)


