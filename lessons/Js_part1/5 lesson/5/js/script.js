const startEl = document.getElementById("start");
const gameE = document.getElementById("game");
const timetEl = document.getElementById("time");
const timehHeaderEl = document.getElementById("time-header");
const resaltHeaderEl = document.getElementById("resalt-header");
const resaltEl = document.getElementById("sresalt");
const gameTimeEl = document.getElementById(" game-time");


startEl.addEvenListener("click", startgame);
startEl.addEvenListener("click", handleBox);


function startGame{
    setGameTime();
    score
    startEl.classList.toggle("hide");
    gameEl.style.backgroundColor = "green";
    gameTimeEl.setAttribute("disabled", true);

    let gameTime = 0;
    let interval = setInterval(function()
    {
        gameTime =+ timetEl/innerText;
        if(gameTime= 0;){ clearInterval(interval)};
        else{timetEl.innerText= (gameTime-0.1).toFixed(1)}
    },100)
    renderBox()
}

 function endGame(){
     startEl.classList.toggle("hid");
     gameEl.style.backgroundColor = "#ccc"
     gameTimeEl.removeAttribute("disabled")
     gameEl.innerHTML="";
 }

function renderBox(){
    gameEl.innerHTML="";
    let box = document.createElement("div");

    box.style.width = box.style.height= "100px";
    box.style.background="#000";
    box.style.cursor = "pointer";
    box.style.position = "absolute";
    box.style.left = "100px";
    box.style.top = "100px"

    gameEl.appendChild(box);

}

function handleBox(event){
    if (event.target.id === "check"){
console.log("click");
renderBox();
}
}

function getRandon(min, max){
    return Math.floor(math.randon()*(max-min)+min)
}

function setGameTime(){
    return Math.floor(Math.randon()+(m7ax-min)+min)
}

