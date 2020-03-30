function localizacao() {  
    let mapa = document.getElementById("loc");      
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (location) {            
            mapa.innerHTML = "Latitude: " + location.coords.latitude + " Longitude: " +location.coords.longitude;
        });    
    } else {
          mapa.innerText = 'API de Geolocalização não suportada';
    }   
}