// Fetch
async function getData() {
    const city = await fetch('https://ipapi.co/json')
    const data = await city.json()
    return data
}

// UI Class
const ui = new UI

getData()
    .then(data => {

        // Init weather class
        const weather = new Weather(data.city)
        weather.getWeather()
            .then(data => {
                ui.showAll(data)
            })
            .catch(err => {
                console.log(err)
                ui.notFound()
            })

    })

// Change city
const changeCityBtn = document.getElementById('changeCityBtn')
changeCityBtn.addEventListener('click', function () {
    const changeCity = document.getElementById('changeCity').value


    if (changeCity === '') {
        alert('Please add your location')
    } else {
        // Init weather class
        const weather = new Weather(changeCity)
        weather.getWeather()
            .then(data => {
                ui.showAll(data)
            })
            .catch(err => {
                console.log(err)
                ui.notFound()
            })
    }

    document.getElementById('changeCity').value = ''
})