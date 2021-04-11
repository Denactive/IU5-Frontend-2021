console.log("Script start");
const empty_city = "City-17"
const init_city = "Москва"
const loading = "Загрузка..."

// данные странички
let city = init_city;   // выбранный город
let city_field;         // поле для указания города
let weather_field;      // поле с текущей погодой
let weather_data;       // массив данных от сервера
let weather_pict_field; // поле с картинкой
let weather_text_field;       // поле с текстом данных о погоде

// сеть
let requestBase = 'https://api.openweathermap.org/data/2.5/weather?q={city}&lang=ru&units=metric&appid=20d168cec6dd572a4b246df42e4646e7';
let request = new XMLHttpRequest();

function getUserText(data) {
    let text;
    text = '<p"><strong>Температура</strong> {temp}°С</p>\
    <p>Ощущается {feels_like}°С</p>\
    <p>мин: {temp_min}°С / макс: {temp_max}°С</p>\
    </br>\
    <p><strong>Давление</strong> {pressure} мм.рт.</p>\
    <p><strong>Влажность</strong> {humidity}%</p>'
    .replace("{temp}", data['main']['temp'])
    .replace("{feels_like}", data['main']['feels_like'])
    .replace("{temp_min}", data['main']['temp_min'])
    .replace("{temp_max}", data['main']['temp_max'])
    .replace("{pressure}", data['main']['pressure'])
    .replace("{humidity}", data['main']['humidity']);
    return text;
    // text = '<div class="d-flex"><strong>Температура</strong> {temp}°С</div></br>\
    // <div class="d-flex">Ощущается {feels_like}°С</div></br>\
    // <div class="d-flex">мин: {temp_min}°С макс: {temp_max}°С</div></br>\
    // </br>\
    // <div class="d-flex"><strong>Давление</strong> {pressure} мм.рт.</div></br>\
    // <div class="d-flex"><strong>Влажность</strong> {humidity}%</div></br>'
}

function getWeatherForecast() {
    weather_field = document.getElementById("current weather");
    weather_field.innerHTML = loading;
    weather_pict_field = document.getElementById("weather_pict");
    weather_pict_field.innerHTML = '<img src="img/loading.png"></img>';
    weather_text_field = document.getElementById("data");
    
    requestURL = requestBase.replace('{city}', city);
    request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        weather_data = request.response;
        console.log("got weather data | weather_main: " + weather_data['weather'][0]['main']);
        console.log("got weather data | weather_description: " + weather_data['weather'][0]['description']);
        console.log("got weather data | weather_icon: " + weather_data['weather'][0]['icon']);
        console.log("got weather data | name: " + weather_data['name']);

        //weather_data = {weather: [{main: "test ok"}]};
        //weather_pict_field.innerHTML = 'src="img/test.png"';
        weather_field.innerHTML = weather_data['weather'][0]['description'];
        weather_pict_field.innerHTML = '<img src="img/{icon}.png">'.replace("{icon}",  weather_data['weather'][0]["icon"]);
        weather_text_field.innerHTML = getUserText(weather_data);
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

getCity();
getWeatherForecast();
console.log("Script end");