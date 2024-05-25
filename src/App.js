import Weather from "./components/weather/weather";
import Time from "./components/time/time";
import Loader from "./components/loader/loader";
import { useSelector } from "react-redux";
import { fetchWeather } from "./data/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div className="App">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Weather />
            <Time />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
