const key = '6041ed75bb19debef4838826c9c456a5'
const city = 'Reus'

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

const getWeather = async ()=>{
    const result = await axios.get(url)
    render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure, result.data.weather[0].description)
}

getWeather()


const appRoot = document.getElementById('appRoot')

const render = (temperatura, humedad, presion, descripcion)=>{
    const template = (
        <div>
            <h1>Tiempo en {city}:</h1>
            <p>En pocas palabras: {descripcion}</p>
            <p>Temperatura: {temperatura}</p>
            <p>Humedad: {humedad}</p>
            <p>Presión: {presion}</p>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()