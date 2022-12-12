const headingOne = document.querySelector("h1");
const divArea = document.getElementById("Test-area"); //const divArea = document.querySelector(#test-area)
const link = document.querySelector("a");
const pElements = document.querySelectorAll("p")
const test = document.getElementById("test");

// headingOne.innerText = "Hello world"; // перезaпись
 headingOne.innerText  += " Hello world"; //headingOne.innerText = headingOne.innerText  + " Hello world";

 divArea.innerHTML = "<b class= 'red'>Change From JS</b>"

headingOne.classList.add("red");
headingOne.classList.remove("red");
headingOne.classList.toggle("blue");// эсли ссущуствует класс blue то он убирает иначе он дабавляет
headingOne.classList.toggle("blue");

let linksHref = link.getAttribute("href")
console.log(linksHref);

link.setAttribute("href", "https://google.com")

link.href = "https://youtube.com";

console.log(link.href);
console.log(pElements);

// pElements[0].style.color = "#ccc"// с один элементом

for(let i = 0; i < pElements.length; i++){
    pElements[i].style.color = "#ccc";
    pElements[i].style.backgroundColor = "#000" //massivam
}

// let client = +prompt("Type count");

// for (let i = 0; i < client; i++) {
//     test.innerHTML+= "<div class = 'box'></div>";
// }

let client = +prompt("Type count");

let renderText = "";
for (let i = 0; i < client; i++) {
    renderText+= "<div class = 'box'></div>";
}

test.innerHTML = renderText