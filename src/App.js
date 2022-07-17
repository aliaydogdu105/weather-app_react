import axios from "axios";
import { useState, useEffect } from "react";

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
  }, []);
  console.log(search);

  return (
    <div className="App">
      <h1 className="text-center mt-3">Current Weather</h1>
      <div className="container d-flex justify-content-center">
        <input
          className="form-control text-center bg-light mt-4 mx-5 border-2 border-danger"
          placeholder="enter your city"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
}

export default App;
