import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActoins";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const WeatherList: React.FC = () => {
  const { days, error, loading, weather } = useTypedSelector(
    (state) => state.weather
  );
  const { theme } = useTypedSelector((state) => state.theme);

  const { fetchWeather, setWeatherDay } = useActions();
  useEffect(() => {
    fetchWeather(days);
  }, [days]);

  if (loading) {
    return (
      <h1 className="text-center  text-8xl bg-background h-screen">
        Loading...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="text-center  text-8xl bg-background h-screen">{error}</h1>
    );
  }

  return (
    <div className="text-center bg-background p-8 h-screen">
      <ThemeToggle />
      <h1>Weather Forecast</h1>
      {weather.map((forecast, index) => (
        <div className="" key={index}>
          <div className="flex justify-center items-center flex-col ">
            <p>
              {forecast.location.name}, {forecast.location.region}
            </p>
            <img src={forecast.current.condition.icon} alt="weather icon" />
            <p>Current Temperature: {forecast.current.temp_c} °C</p>
            <p>Condition: {forecast.current.condition.text}</p>
          </div>
          <div>
            <Button
              theme={theme}
              type="button"
              variant="primary"
              label="Current"
              customClass="ml-4"
              onClick={() => setWeatherDay(1)}
            />
            <Button
              theme={theme}
              type="button"
              variant="primary"
              label="3days"
              customClass="ml-4"
              onClick={() => setWeatherDay(3)}
            />
            <Button
              theme={theme}
              type="button"
              variant="primary"
              label="7days"
              customClass="ml-4"
              onClick={() => setWeatherDay(7)}
            />
            <Button
              theme={theme}
              type="button"
              variant="primary"
              label="14days"
              customClass="ml-4"
              onClick={() => setWeatherDay(14)}
            />

            <h2 className="text-xl mt-5">Forecast for : {days} days </h2>
            <ul className="mt-10 text-center ">
              {forecast.forecast.forecastday.map((day, dayIndex) => (
                <li
                  className="flex mb-5 mx-5 rounded border-white border-solid border"
                  key={dayIndex}
                >
                  <div className="flex justify-center items-center flex-col h-60 w-52 rounded border-white border-solid border">
                    <p>{day.date.slice(5, 10)}</p>
                    <img src={day.day.condition.icon} alt="weather icon" />
                    <p>
                      {day.day.mintemp_c}°C - {day.day.maxtemp_c}°C
                    </p>
                    <p>{day.day.condition.text}</p>
                  </div>
                  <ul className="grid grid-cols-12 gap-3 justify-center mx-auto w-full">
                    {day.hour.map((hour, hourIndex) => (
                      <li
                        className="flex flex-col items-center justify-center"
                        key={hourIndex}
                      >
                        <p>{hour.time.slice(11, 16)}</p>{" "}
                        <img
                          src={hour.condition.icon}
                          alt={hour.condition.text}
                          className="w-10 h-10"
                        />
                        <p>{hour.temp_c}°C</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
