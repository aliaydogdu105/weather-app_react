const City = ({ city }) => {
  console.log(city);
  return (
    <div className="text-center mt-5">
      <h1>{city.name}</h1> <hr />
      <h1>{city.main.temp} °C</h1>
      <h1>{city.weather[0].main}</h1>
    </div>
  );
};

export default City;
