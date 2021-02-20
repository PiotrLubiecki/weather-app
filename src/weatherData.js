const weatherData = (() => {
    const weatherDataFetch = async function(city, desc, temp) {
        const currentCity = document.querySelector('#current-city');
        const tempDiv = document.querySelector('#temperature');
        const weatherDesc = document.querySelector('#weather-desc');
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4deeb2927ba731c378159029900bed51`, {mode: 'cors'})
            const cityData = await response.json();
            if (currentCity.classList.contains('invisible')){
                currentCity.classList.remove('invisible');
                tempDiv.classList.remove('invisible');
                weatherDesc.classList.remove('invisible');
            }
            currentCity.textContent = city;
            let currentDescription = cityData.weather[0].main;
            desc.textContent = currentDescription;
            weatherImage(currentDescription);
            let currentTemperature = Math.round(cityData.main.temp) - 273;
            currentTemperature = tempDisplay(currentTemperature);
            temp.textContent = currentTemperature;
        } catch (error) {
            console.error(error);
            const alertDiv = document.querySelector('#alert-div');
            alertDiv.classList.add('alert-display');
            currentCity.classList.add('invisible');
            tempDiv.classList.add('invisible');
            weatherDesc.classList.add('invisible');
            setTimeout(() => {
                alertDiv.classList.remove('alert-display');
            }, 4000);
        }
    }
    
    const displayWeather = function(city = '') {
        let selectedCity = document.querySelector('#city-search').value || city;
        const weatherDesc = document.querySelector('#weather-desc');
        const weatherTemp = document.querySelector('#weather-temperature');
        weatherDataFetch(selectedCity, weatherDesc, weatherTemp);
        document.querySelector('#city-search').value = '';
    }
    
    const weatherImage = function(desc){
        const bckg = document.querySelector('html');
        bckg.style.backgroundImage = `Images/${desc}.jpg`;
    }
    
    const tempDisplay = function(temp){
        const tempCheckbox = document.querySelector('#temp-checkbox');
        if (tempCheckbox.checked === false){
            temp = Math.round(temp * 9 / 5 + 32);
        }
        return temp
    }
    return {
        displayWeather, 
    }
})()

export { weatherData }