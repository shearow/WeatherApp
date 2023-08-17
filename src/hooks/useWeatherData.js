import { useState } from "react"
import { API_KEY_WEATHER } from "../const/API_KEY_WEATHER.js"

export const useWeatherData = () => {
    const [dataFetch, setDataFetch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setIsLoading(true);
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}`);
            const data = await res.json();
    
            if(!res.ok) throw {status: res.status};    
            setDataFetch(data);
        }catch(err){
            setError(`Ha ocurrido un error ${err.status}`);
        }finally{
            setIsLoading(false);
        }
    }   

    return {
        ...dataFetch,
        dataFetch,
        isLoading,
        error,
        fetchWeather
    }
}