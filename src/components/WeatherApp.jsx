import { useWeatherData } from "../hooks/useWeatherData.js"
import { Spinner } from "./Spinner.jsx"
import "../styles/weatherApp.css";

export const WeatherApp = () => {
    const {dataFetch, isLoading, error, fetchWeather} = useWeatherData();

    const takeInfoWeather = (e) => {
        e.preventDefault();
        if(e.target.searchCity.value !== ""){
            fetchWeather(e.target.searchCity.value);
        }
    }

    return (
        <>
        <div className="weather-container container">
            <h1>Weather App</h1>
            <form onSubmit={takeInfoWeather}>
                <input type="text" name="searchCity" placeholder="Enter country/city" />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div className="info-weather">
                {isLoading && <Spinner />}
                {dataFetch && (
                    <>
                    <img src={`https://openweathermap.org/img/wn/${dataFetch.weather[0].icon}@2x.png`}/>
                    <h3>{(dataFetch.main.temp - 273.15).toFixed(2)} º</h3>
                    <h3>{dataFetch.name}</h3>
                    <br /><hr />
                    <div className="time-data">
                        <div className="humidity">
                            <i className="fa-solid fa-water"></i>
                            <div className="time-data-text">
                                <p>{dataFetch.main.humidity} %</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="wind">
                            <i className="fa-solid fa-wind"></i>
                            <div className="time-data-text">
                                <p>{dataFetch.wind.speed} KM/H</p>
                                <span>Wind</span>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>
        </>
    )
}