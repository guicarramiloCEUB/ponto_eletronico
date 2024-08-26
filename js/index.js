const weekDay = document.getElementById("dia-semana")
const dataAtual = document.getElementById("data-atual")
const horaAtual = document.getElementById("hora-atual")

function updateContent(){
    dataAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
    weekDay.textContent = getWeekDay();
}

//retorna hora atual//
function getCurrentTime(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

//retorna data atual//
function getCurrentDate(){
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function getWeekDay(){
    const date = new Date();
    const dias = ["Domingo", "Segunda-feira", "Terça-feira",
     "Quarta-feira", "Quinta-feira", "Sexta-feira", "sabado"]
    return dias[date.getDay()]
}


updateContent();
setInterval(updateContent, 1000);

console.log(getCurrentDate());
console.log(getCurrentTime());
