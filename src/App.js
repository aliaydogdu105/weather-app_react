import axios from "axios";
import { useState, useEffect } from "react";
import City from "./City";
import "./App.css";

function App() {
  const apiKey = "df904bfc745763377b15eab90c5a74d0";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getWeatherApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getWeatherApi();
  }, [search]);

  const handleClick = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App vh-100">
      <h1 className="text-center mb-5 display-2">- Current Weather -</h1>
      <div className="container d-flex justify-content-center mt-3">
        <input
          className="form-control text-center text-light bg-dark mb-5 mx-5 border-2 border-danger"
          placeholder="Search"
          onClick={handleClick}
          type="text"
        />
      </div>
      {city && <City city={city} />}
    </div>
  );
}

export default App;
