console.log("Script start");
const empty_city = "City-17"
const init_city = "Москва"
const loading = "Загрузка..."

// данные странички
let city_field;         // поле для указания города
let weather_field;      // поле с текущей погодой
let weather_data;       // массив данных от сервера
let weather_pict_field; // поле с картинкой
let weather_text_field; // поле с текстом данных о погоде

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
}

function getCityWeather(city) {
    city_field = document.getElementById("city");
    console.log("current cyty: "+ city_field.innerText + " | trying to set " + city);
    
    let prev_req = weather_data;

    weather_field = document.getElementById("current weather");
    weather_field.innerHTML = loading;
    weather_pict_field = document.getElementById("weather_pict");
    weather_pict_field.innerHTML = '<img src="img/loading.png"></img>';
    weather_text_field = document.getElementById("data");
    
   let prom = new Promise((resolve, reject) => {
        requestURL = requestBase.replace('{city}', city);
        console.log("request: " + requestURL);

        request.open("GET", requestURL);
        request.responseType = 'json';
        request.onload = () => {
            console.log("response code: " + request.response.cod);
            if (request.response.cod === 200)
                return resolve(request.response);
            return reject(request.response);
        }
        request.send();
      });

    prom.then(
        (x) => {      
            console.log("promise successed");

            weather_data = x;
            console.log("got weather data | weather_main: " + weather_data['weather'][0]['main']);
            console.log("got weather data | weather_description: " + weather_data['weather'][0]['description']);
            console.log("got weather data | weather_icon: " + weather_data['weather'][0]['icon']);
            console.log("got weather data | name: " + weather_data['name']);

            weather_field.innerHTML = weather_data['weather'][0]['description'];
            weather_pict_field.innerHTML = '<img src="img/{icon}.png">'.replace("{icon}",  weather_data['weather'][0]["icon"]);
            weather_text_field.innerHTML = getUserText(weather_data);
            city_field.innerHTML = weather_data['name'];
        },
        (x) => {
            console.log("promise failed");
            alert(x.message);
            weather_data = prev_req;
            // восстанавливаем данные, на месте которых сейчас "загрузка"
            weather_field.innerHTML = weather_data['weather'][0]['description']; 
            weather_pict_field.innerHTML = '<img src="img/{icon}.png">'.replace("{icon}",  weather_data['weather'][0]["icon"]);
        }
    );
}

// кнопка поиска города
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    console.log("search: " + inputValue);
    if (inputValue === "")
        return;
    getCityWeather(inputValue);
});

getCityWeather(init_city);
console.log("Script end");