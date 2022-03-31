const url = 'https://api.openweathermap.org/data/2.5/';
const key = '36b886c0ada62675de31106cd0139ef2'

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value)
        searchBar.value = ""
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)   
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerHTML = `${result.name}, ${result.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerHTML = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max )}°C`
}

const searchBar = document.getElementById('cityName');
searchBar.addEventListener('keypress', setQuery)