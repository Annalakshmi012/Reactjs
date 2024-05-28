import "./App.css";
import PropTypes from "prop-types";
import searchIcon from "./assets/images/search.png";
import clearIcon from "./assets/images/clear.png";
import cloudIcon from "./assets/images/clouds.png";
import drizzleIcon from "./assets/images/drizzle.png";
import rainIcon from "./assets/images/rain.png";
import windIcon from "./assets/images/wind.png";
import snowIcon from "./assets/images/snow.png";
import humidityIcon from "./assets/images/humidity.png";
import { useEffect, useState } from "react";


const WeatherDetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
    return(
    <>
    <div className="image">
    <img src={icon} alt="image"  className="image"/>
    </div>
    <div className="temp">{temp}°C</div>
    <div className="city">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
        <div>
            <span className="lat">Latitude</span>
            <span>{lat}</span></div>
            <div>
            <span className="lat">longitude</span>
            <span>{log}</span></div>
</div>
<div className="data-container">
    <div className="element">
    <img src={humidityIcon} alt="humidity" className="icon" />
        <div className="data">
        <div className="humidity-percent">{humidity}%</div>
        <div className="text">Humidity</div>
    </div>  
    </div>
    <div className="element">
        <img src={windIcon} alt="wind" className="icon" />
        <div className="data">
        <div className="wind-percent">{wind} km/h</div>
        <div className="text">Wind Speed</div>
    </div>
    </div>
</div>
        </>
    );
}
WeatherDetails.propTypes={
    icon:PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    log: PropTypes.number.isRequired,
    
};

export const App = () => {
    let api_key="4b60b1947df028051f7ca4465d7c57e1";
    const [icon,setIcon]=useState(clearIcon);
    const [temp,setTemp]=useState(0);
    const [city,setCity]=useState("Karur");
    const [country,setCountry]=useState("India");
    const [lat,setLat]=useState(0);
    const [log,setLog]=useState(0);
    const [humidity,setHumidity]=useState(0);
    const [wind,setWind]=useState(0);
    const [text,setText]=useState("chennai");
    const [cityNotFound,setCityNotFound]=useState(false);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const weatherIconMap ={
        "01d":clearIcon,
        "01n":clearIcon,
        "02d":cloudIcon,
        "02n":cloudIcon,
        "03d":drizzleIcon,
        "03n":drizzleIcon,
        "04d":drizzleIcon,
        "04n":drizzleIcon,
        "09d":rainIcon,
        "09n":rainIcon,
        "10d":rainIcon,
        "10n":rainIcon,
        "13d":snowIcon,
        "13n":snowIcon,
    };
    const search=async ()=>{
        setLoading(true);
      
        let url=`https://api.openweathermap.org/data/2.5/weather?units=Metric&q=${text}&appid=${api_key}`;
        try{
            let res =await fetch(url);
            let data =await res.json();
            // console.log(data);
            if(data.cod==="404"){
                console.error("City no found");
                setCityNotFound(true);
                setLoading(false);
                return;

            }
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setTemp(Math.floor(data.main.temp));
            setCity(data.name);
            setCountry(data.sys.country);
            setLog(data.coord.lon);
            setLat(data.coord.lat);
            const weatherIconCode=data.weather[0].icon;
            setIcon(weatherIconMap[weatherIconCode]||clearIcon);
            setCityNotFound(false);
        }catch(error){
            console.log("an error occurred:",error.message);
            setError("An error occurred while fetching weather data");     
        }finally{
            setLoading(false);


        }
    };
    const handleCity=(e)=>{
        setText(e.target.value);

    };
    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            search();
        }
    };
    useEffect(function(){
        search();
    },[]);
  return (
    <div className="container">
        <div className="input-container">
            <input type="text" className="cityInput" 
            value={text} placeholder="Enter  a city" 
            onChange={handleCity} onKeyDown={handleKeyDown}/>
            <div className="search-icon" onClick={()=>search()}>
                <img src={searchIcon} alt="search"  />
            </div>
        </div>
        
    {loading&&<div className="loading">Loading...</div>}
    {error&&<div className="error">{error}</div>}
    {cityNotFound&&<div className="city-not">City not found</div>}
   {!loading&& !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} 
        lat={lat} log={log} humidity={humidity} wind={wind}/>}
    
    </div>
  )
}

