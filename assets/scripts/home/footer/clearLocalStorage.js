const logout = document.querySelector(".logout__div");

logout.addEventListener("click", () => {
    var popup = confirm("Manter conectado? (Ok - Redireciona para a página de login mantendo o local storage / Cancelar - Redireciona para a página de login e exclui o local Storage)")
    if(!popup === true){
        localStorage.clear();
    }
})