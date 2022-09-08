import "./App.css";
import { useEffect, useState } from "react";
import { getWeather } from "./api/getWeather";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

function App() {
  const [weatherState, setweatherState] = useState(null);
  function getInitialData() {
    let lat;
    let lon;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      let weatherData = await getWeather(lat, lon);
      setweatherState(weatherData);
    });
  }
  useEffect(() => getInitialData(), []);
  if (!weatherState) return <Loader />;
  return (
    <div className="bg-white bg-opacity-30 shadow-xl w-56 p-4 flex flex-col rounded-3xl items-center mx-auto my-20 font-bold">
      <div>{weatherState.name}</div>
      <div className="pt-2 first-letter:capitalize">
        {weatherState.weather[0].description}
      </div>
      <img
        className="w-24"
        src={`./src/assets/icons/${weatherState.weather[0].icon}.png`}
      ></img>
      <div className="pt-2">{`${Math.round(weatherState.main.temp)} °C`}</div>
      <div className="pt-2">
        Sensación térmica: {Math.round(weatherState.main.feels_like)}° C
      </div>
      <div className="pt-2">Humedad: {weatherState.main.humidity}%</div>
    </div>
  );
}

export default App;
