import { selectNight } from "./store/slices/nightSlice/nightSlice";
import { fetchMode } from "./store/slices/nightSlice/API";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ToDos from "./components/ToDos/ToDos";
import "./App.css";

function App() {
  const night = useSelector(selectNight);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMode());
  }, []);

  return (
    <div className={night ? "night App" : "App"}>
      <ToDos />
    </div>
  );
}

export default App;
