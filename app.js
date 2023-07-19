const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');






const upadteUI = (data) => {
    const citydets = data.citydets;
    const weather = data.weather;
    console.log(weather.Temperature.Metric.Value)

    //update details template
    details.innerHTML = `<div class="detail">
                            <h5>${citydets.EnglishName}</h5>
                        </div>
                        <div class="weather">
                            ${weather.WeatherText}
                        </div>
                        <div class="display">
                            <span>${weather.Temperature.Metric.Value}</span>
                            <span>&deg;</span>`;

                    //updating the icon of the weather app
                    
                    let iconsrc = `images/icons/${weather.WeatherIcon}.svg`;
                    icon.setAttribute('src',iconsrc);



                    //update the night and day icon
                    let timesrc = null;
                    if(weather.IsDayTime){
                        timesrc = 'images/day.svg'
                    } else {
                        timesrc = 'images/night.svg'
                    }
                    time.setAttribute('src',timesrc);

                    if(card.classList.contains('show')){
                        card.classList.remove('show');
                    }
}

// for responsive of the other part of the page
const cityForm  = document.querySelector('form');


//the function is a asynchronous function
const updatecity = async (city) => {
   const citydets = await getCity(city);

   const weather = await getWeather(citydets.Key);

   return {
    citydets: citydets,
    weather: weather
   };

}

cityForm.addEventListener('submit', e => {
   //prevent default
    e.preventDefault();

    //getting city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //updating th ui of the city
    updatecity(city)
        .then(data => {upadteUI(data);
        console.log(data)})
        .catch(err => console.log(err));

})
