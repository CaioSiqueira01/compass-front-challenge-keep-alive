var localStorage = localStorage.getItem("name");
var localObject = JSON.parse(localStorage);

if (localObject === null){
    document.location.pathname = "../index.html"
} else if (localObject.username !== "admin" && localObject.password !== "admin" || localObject === null) {
    document.location.pathname = "../index.html"
}