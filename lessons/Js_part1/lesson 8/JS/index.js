
let randomNumber = getRandom();
console.log(randomNumber);

function getRandom(){
    return Math.floor(Math.random()*100)+1;
}
let speechReg = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new  speechReg();
console.log(recognition);

recognition.start();
class speechGame{
    constructor(random){
        this.random = random;
        this.msgEl = document.getElementById("msg")
    }
     onSpeak= (event) => {
        const messege = event.results[0][0].transcript;
        console.log(messege);
        this.writeMessege(messege);
        this.CheckNumber(messege)
    }
     writeMessege(msg){
        const num =+ messege
        msgEl.innerHTML = `
        <div>Ты сказал:<div/>
        <span class = "pox">${msg}</span>
        `
    }
     CheckNumber(messege){
        const num =+ messege;
     
        if (Number.isNaN(num)){
            msgEl.innerHTML += "<div>Это не корректное значение</div>"
            return {random, msgEl} = this;
        }
        if (num > 100 || num < 1) {
            msgEl.innerHTML += "<div> Цифра должна быть в диапазоне от 1 до 100</div>"
            return
        }
        if (num < randomNumber) {
            msgEl.innerHTML += "<div> Бери выше</div>"
            return
        }
        if (num > randomNumber) {
            msgEl.innerHTML += "<div>Бери ниже</div>"
        }
        if (num === randomNumber) {
            document.body.innerHTML = `
            <h2>Поздравляем! Вы отгадали загаданное число! <br><br>
            Я загадал ${num}</h2>
            <button class="play-again" id="play-again">Играть заново</button>
            `;
        }
}

checkEndGame(){
    recognition.start();
}
 }
const gameOption = new SpeakGame(randomNumber);
const {onSpeak, checkEndGame} = gameOption;
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", checkEndGame);





