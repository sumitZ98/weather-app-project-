// for the  weather card responsiveness of the web page
const key = 'cjijw0E1AIj88pY94xEBAGK7sKRkkHCy'; //the api key that we are using for getting info about the weather
//getting information about the particular city
const getWeather = async (id) =>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};



//getting city information
const getCity = async (city) => {
    const city_search = 'http://dataservice.accuweather.com/locations/v1/cities/search';
     //api for seaching a city-information
     const query = `?apikey=${key}&q=${city}`

     const response = await fetch(city_search + query);
     const data = await response.json();
     return data[0];
};

// getCity('delhi').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('there is an error');
// })
