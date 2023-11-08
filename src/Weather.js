import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [temperature, setTemperature] = useState(null); //null protoze zatim nevime hodnotu
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
      description: response.data.weather[0].description,
    });
  }

  function Search() {
    //api call city
    const apiKey = "ffbbbb548b237aed83af9997c794ee44";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    //is the weatherData ready? by default neni ready, takže to bude ignorováno a pustí se nejdřív else. Tam se udělá api call,
    // ten nás zpět hodí k funkci s response, kde se ready stane true a vše z if je pak zobrazeno.
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange} //whenever this changes
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    Search(); //vyvoláme funkci, která zobrazí defaultní město
    return "Loading";
  }
}
