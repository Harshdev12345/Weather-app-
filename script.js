

async function getWeather(){

let city = document.getElementById("cityInput").value

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f68f1b83f8efa6a6ba113cc99caaa7d4&units=metric`

let response = await fetch(url)

let data = await response.json()

let result = document.getElementById("weatherResult")

if(data.cod === "404"){
result.innerHTML = "City not found"
return
}

result.innerHTML = `
<h2>${data.name}</h2>
<p>🌡 Temperature: ${data.main.temp} °C</p>
<p>🌥 Weather: ${data.weather[0].main}</p>
<p>💨 Wind Speed: ${data.wind.speed} m/s</p>
`
}
