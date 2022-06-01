const searchBox = document.querySelector('#search');
const getBtn = document.querySelector('#getWeatherBtn');
const conditionsBox = document.querySelector('#conditions');
const tempBox = document.querySelector('#temp');
const feelsLikeBox = document.querySelector('#feelsLike');
const cityName = document.querySelector('#cityName')
const weatherGlobe = document.querySelector('#weatherGlobe');

// convert kelvin to f
function kelvinToFar(kelvin) {
    let temp = (kelvin - 273.15) * 1.8 + 32;
    console.log(Math.floor(temp));
    return Math.floor(temp)
}

//geo coding 
let city = document.querySelector('#city');

// get city with button click
getBtn.addEventListener('click', getCity)

//get lat & lon using city name
function getCity(city) {
    city = searchBox.value
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}}&appid=cb88ccd906064cfe6a757fee8c8dce55`)
        .then((res) => {
            console.log(res.data)
            //return lat & lon in array to next .then
            return ([res.data[0].lat, res.data[0].lon]);
        })
        .then((res) => {
            console.log(res)
            //use returned array to inject lat & lon into api call to get weather data
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0]}&lon=${res[1]}&appid=cb88ccd906064cfe6a757fee8c8dce55`)
                .then((res) => {
                    //tempBox tempeture data
                    console.log(res.data)
                    let kelvinTemp = (res.data.main.temp);
                    let usTemp = kelvinToFar(kelvinTemp);
                    // console.log(kelvinTemp)
                    // console.log(usTemp)
                    tempBox.innerHTML = `${usTemp}&#8457`;
                    //feels like 
                    let kelvinFeelsLike = res.data.main.feels_like;
                    let usFeelsLike = kelvinToFar(kelvinFeelsLike);
                    feelsLikeBox.innerHTML = `feels ${usFeelsLike}&#8457`
                    //condtions
                    conditionsBox.textContent = res.data.weather[0].description;
                    //city name
                    cityName.textContent = res.data.name;
                    //change background depending on tempeture
                    if (usFeelsLike <= 32) {
                        weatherGlobe.style.backgroundColor = '#100E99';
                        weatherGlobe.style.boxShadow = ' 2px 2px 20px blue'
                    } else if (usFeelsLike <= 70 && usFeelsLike >= 33) {
                        weatherGlobe.style.backgroundColor = '#fcce03';
                        weatherGlobe.style.boxShadow = ' 2px 2px 20px orange'
                    } else if (usFeelsLike >= 71) {
                        weatherGlobe.style.backgroundColor = '#fc3503';
                        weatherGlobe.style.boxShadow = ' 2px 2px 20px red'
                    }
                })
        })
        .catch((err) => {
            console.log(err)
        })
}

