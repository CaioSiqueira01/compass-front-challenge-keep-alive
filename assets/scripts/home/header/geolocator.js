const localization = document.querySelector(".geolocator__localization");
const icon = document.querySelector(".temperature__icon");
const temperatureValue = document.querySelector(".temperature__measurement");
const div = document.querySelector(".geolocator__temperature");

const api = {
    key: "58fe4a5ee25b4aa4b28102127221210",
    base: "https://api.weatherapi.com/v1",
}

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosicion, showError);
    }
    else {
        alert('navegador não suporta');
    }

    function setPosicion(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }

    function showError(error){
        alert(`erro: ${error.message}`)
    }

})

function coordResults(lat, long){
    fetch(`${api.base}/current.json?key=${api.key}&q=${lat},${long}`)
   
    .then(response =>{
        if(!response.ok) {
            throw new Error(`http error: status ${response.status}`)
        }
        return response.json();
    })

    .catch(error => {
        alert(error.message);
    })

    .then(response =>{
        displayResults(response)
    })
}

function displayResults(geolocator) {
    localization.innerHTML = `${geolocator.location.name} - ${geolocator.location.region}`;
    let iconName = geolocator.current.condition.icon.replace("//cdn.weatherapi.com", "");
    icon.setAttribute("src", `../assets/imgs/home/header/${iconName}`)
    temperatureValue.innerText = geolocator.current.temp_c +  "°";
}