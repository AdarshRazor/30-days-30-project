import './App.css';
import React, { useState } from "react";
import {Button, Form, InputGroup} from 'react-bootstrap';

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather`
  const API_KEY = "aed6ef2d48e84730c4fd86475ca3f502"

  const [city, setcity] = useState("")
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const response = await fetch(url + `?q=${city}&appid=${API_KEY}`)
    const json = await response.json()
    console.log(json)
    setWeatherData(json)
    setcity("") // Reset the input field after submission
  }
  

  return (
    <>
      <div className="container">
        <h1 className="my-5">Weather App ☀️</h1>
        <Form onSubmit={fetchWeatherData}>
        <InputGroup className="search-box mb-3" onSubmit={fetchWeatherData}>
          <Form.Control
            placeholder="Enter city name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="city-name"
            value={city}
            onChange={e => setcity(e.target.value)}
          />
          <Button variant="primary" id="button-addon2" type="submit">
            Button
          </Button>
        </InputGroup>
        </Form>
      </div>
      {weatherData && (
                    <div className="container">
                        <h3>{weatherData.name},{weatherData.sys.country}</h3>
                        <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                    </div>
                )}
    </>
  );
}

export default App;
