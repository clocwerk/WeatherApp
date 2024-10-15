import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/reducers";
import WeatherList from "./components/WeatherList";

const App = () => {
  return (
    <Provider store={store}>
      <div className={`App`}>
        <WeatherList />
      </div>
    </Provider>
  );
};

export default App;
