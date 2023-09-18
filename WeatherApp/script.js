
try{
    const btn=document.getElementById('ss');
btn.addEventListener('click',()=>{
    const temp = document.querySelector('.temp');
    const humidityE = document.querySelector('.humidity');
    const windSpeedE = document.querySelector('.windSpeed');
    const search=document.getElementById('s').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0d224dc25ee6dfd3dbcbb2bf83547947&units=metric`).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    const temperature=data.main.temp;
    const feel_like=data.main.feels_like;
    const humidity=data.main.humidity;
    const temp_min=data.main.temp_min;
    const max=data.main.temp_max;
    const discription=data.weather[0].description;
    const main=data.weather[0].main;
    const windSpeedMetersPerSecond = data.wind.speed;
// Convert the wind speed to km/h
     const windSpeedKilometersPerHour = windSpeedMetersPerSecond * 3.6;
     const city=data.name;
     
     temp.innerHTML=`<img src="./img/l.png" alt="" id="img2"> ${city} <br>
     <p>Temperature: ${temperature}°C</p>
        <p>Feels Like: ${feel_like}°C</p>
        <p>Min Temperature: ${temp_min}°C</p>
        <p>Max Temperature: ${max}°C</p>
        
        `;
        
        humidityE.innerHTML=`
        <img src="./img/h.png" alt="" id="img3">
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${discription}</p>
        `;
        windSpeedE.innerHTML=`
        
        <img src="./img/pngwing.png" alt="" id="img4"> <br><span>Main Weather: ${main}</span> <br>
        <span>Wind Speed: ${windSpeedKilometersPerHour.toFixed(2)} km/h</span>
        `;
        document.getElementById('img2').style.width="50px";
        document.getElementById('img2').style.height="50px";
        
        document.getElementById('img3').style.width="150px";
        document.getElementById('img3').style.height="150px";
        
        document.getElementById('img4').style.width="150px";
        document.getElementById('img4').style.height="150px";
})
})
}catch(e){

}