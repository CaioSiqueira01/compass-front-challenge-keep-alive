function createDate(){
    const date = document.querySelector(".time__date");
    var monthName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
    var weekDay = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var currentDate = new Date;
    date.innerHTML = (`${weekDay[currentDate.getDay()]}, ${currentDate.getDate()} de ${monthName[currentDate.getMonth()]} de ${currentDate.getFullYear()}`);
}

createDate();