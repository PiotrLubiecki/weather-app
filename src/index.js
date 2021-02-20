// import { weatherData } from "./weatherData"

// const citySearchButton = document.querySelector('#city-search-submit');
//     citySearchButton.addEventListener('click', weatherData.displayWeather);
// const searchInput = document.querySelector('#city-search')
//     searchInput.addEventListener('keydown', function(event) {
//         if(event.keyCode === 13){
//             event.preventDefault();
//             weatherData.displayWeather();
//            }
//     });

// const temperatureSlider = document.querySelector('.slider');
//     temperatureSlider.addEventListener('click', () => {
//         let currentTemperature = document.querySelector('#weather-temperature').textContent;
//         const tempCheckbox = document.querySelector('#temp-checkbox');
//         if (tempCheckbox.checked === false){
//             currentTemperature = Math.round((currentTemperature - 32) / 9 * 5);
//         } else {
//             currentTemperature = Math.round(currentTemperature * 9 / 5 + 32);
//         }
//         document.querySelector('#weather-temperature').textContent = currentTemperature;
//     });

// weatherData.displayWeather('Paris');