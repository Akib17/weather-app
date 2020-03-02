class Weather {
    constructor(city) {
        this.city = city
        this.appId = 'ab6f46ac82ea7c6c98f67b70bfefb12b'
    }

    // Fetch weather information from api
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appId}`)
        const data = await response.json()

        return data;
    }
}