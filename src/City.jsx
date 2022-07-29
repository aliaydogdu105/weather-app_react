const City = ({ city }) => {
  console.log(city);
  return (
    <div className="container text-center text-light bg-dark mt-5">
      <h1>{city.name}</h1>
      <h1>{city.main.temp} °C</h1>
      <h1>{city.weather[0].main}</h1>
    </div>
  );
};

export default City;
