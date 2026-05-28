import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "YOUR_API_KEY";

  const getWeather = async () => {
    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>
      </div>

      {weather && (
        <div className="weather-box">
          <h2>{weather.name}</h2>

          <h3>{weather.main.temp} °C</h3>

          <p>{weather.weather[0].main}</p>

          <p>Humidity: {weather.main.humidity}%</p>

          <p>Wind Speed: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
}
