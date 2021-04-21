console.log("Script start");
const empty_city = "City-17"
const init_city = "Moscow"

// данные странички
let city = init_city;
let city_field;
let weather_data;

// сеть
let requestBase = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid=20d168cec6dd572a4b246df42e4646e7';
let request = new XMLHttpRequest();

function getWeatherForecast() {
    requestURL = requestBase.replace('{city}', city);
    //console.log("request: ", requestURL);

    request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        weather_data = request.response;
        console.log("got weather data | weather in " + city + "  is: " + weather_data['weather'][0]['main']);
    }
}

function getCity() {
    city_field = document.getElementById("city");
    //let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    // let request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();

    // request.onload = function() {
    //     weather_data = request.response;
    //     console.log(weather_data);
    // }

    city = init_city;
    city_field.innerHTML = city;
}

setTimeout(getCity(), 3000);
//getWeatherForecast();
console.log("Script end");