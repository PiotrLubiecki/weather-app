(()=>{"use strict";const e={displayWeather:function(e=""){!async function(e,t,r){const c=document.querySelector("#current-city"),a=document.querySelector("#temperature"),n=document.querySelector("#weather-desc");try{const o=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=4deeb2927ba731c378159029900bed51`,{mode:"cors"}),s=await o.json();c.classList.contains("invisible")&&(c.classList.remove("invisible"),a.classList.remove("invisible"),n.classList.remove("invisible")),c.textContent=e;let i=s.weather[0].main;t.textContent=i,function(e){document.querySelector("html").style.backgroundImage=`Images/${e}.jpg`}(i);let u=Math.round(s.main.temp)-273;u=function(e){return!1===document.querySelector("#temp-checkbox").checked&&(e=Math.round(9*e/5+32)),e}(u),r.textContent=u}catch(e){console.error(e);const t=document.querySelector("#alert-div");t.classList.add("alert-display"),c.classList.add("invisible"),a.classList.add("invisible"),n.classList.add("invisible"),setTimeout((()=>{t.classList.remove("alert-display")}),4e3)}}(document.querySelector("#city-search").value||e,document.querySelector("#weather-desc"),document.querySelector("#weather-temperature")),document.querySelector("#city-search").value=""}};document.querySelector("#city-search-submit").addEventListener("click",e.displayWeather),document.querySelector("#city-search").addEventListener("keydown",(function(t){13===t.keyCode&&(t.preventDefault(),e.displayWeather())})),document.querySelector(".slider").addEventListener("click",(()=>{let e=document.querySelector("#weather-temperature").textContent;e=!1===document.querySelector("#temp-checkbox").checked?Math.round((e-32)/9*5):Math.round(9*e/5+32),document.querySelector("#weather-temperature").textContent=e})),e.displayWeather("Paris")})();