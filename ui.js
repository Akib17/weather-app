class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.description = document.getElementById('w-description')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.pressure = document.getElementById('w-pressure')
        this.wind = document.getElementById('w-wind')
    }

    // Print function
    showAll(data) {
        this.location.textContent = data.name
        this.description.textContent = data.weather[0].description
        this.string.textContent = `${Math.round(data.main.temp - 273)} ℃`
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        this.humidity.textContent = `Humidity: ${data.main.humidity} % `
        this.pressure.textContent = `Pressure: ${data.main.pressure} °`
        this.wind.textContent = `Wind: ${data.wind.speed} km/h `
    }

    notFound() {
        this.location.textContent = data.name
        this.description.textContent = data.weather[0].description
        this.string.textContent = `${Math.round(data.main.temp - 273)} ℃`
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        this.humidity.textContent = `Humidity: ${data.main.humidity} % `
        this.pressure.textContent = `Pressure: ${data.main.pressure} °`
        this.wind.textContent = `Wind: ${data.wind.speed} kh/h `
    }
}