import React, { useState } from "react";
import "./Card.css";
import {Button, Form, InputGroup} from 'react-bootstrap';

function Card() {

  const url = `https://api.openweathermap.org/data/2.5/weather`
  const API_KEY = "aed6ef2d48e84730c4fd86475ca3f502"

  const [city, setcity] = useState("")
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const response = await fetch(url + `?q=${city}&appid=${API_KEY}`)
    const json = await response.json()
    console.log(json)
    setWeatherData(json)
  }
  

  return (
    <>
      <div className="container">
        <h1 className="my-5">Weather App ☀️</h1>
        <InputGroup className="search-box mb-3">
          <Form.Control
            placeholder="Enter city name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="city-name"
            onChange={e => setcity(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={fetchWeatherData}>
            Button
          </Button>
        </InputGroup>
      </div>
      {weatherData && (
                    <div className="container">
                        <h3>{weatherData.name}</h3>
                        <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                    </div>
                )}
    </>
  );
}

export default Card;
