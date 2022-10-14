const logout = document.querySelector(".logout__div");

logout.addEventListener("click", () => {
    var popup = confirm("Manter conectado?")
    if(!popup === true){
        localStorage.clear(); 
        window.location = '../index.html'
    } else {
       return;
     }
})