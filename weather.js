const API_KEY = "b58644b0a6426debc17ca1b9ab3cc831";

function onGeoOk(position){
     
    const lon = position.coords.longitude;

    const lat = position.coords.latitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
 
    fetch(url).then((response)=>response.json()).then((data)=>{
        const city = document.querySelector("#weather div:last-child");
        const weather =  document.querySelector("#weather div:first-child");
        weather.innerText = `${data.weather[0].main}/${data.main.temp}°`
        city.innerText = `${data.name}`
    })
    

}


function onGeoError(){ 
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);