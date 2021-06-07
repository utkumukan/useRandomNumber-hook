import React, { useEffect, useState } from "react";
import "./styles.css";

function useRandomNumber(range) {
  const [state, setState] = useState();

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    switch (range) {
      case "0-25":
        setState(getRandomNumber(0, 25));
        break;
      case "25-50":
        setState(getRandomNumber(25, 50));
        break;
      case "50-75":
        setState(getRandomNumber(50, 75));
        break;
      case "75-100":
        setState(getRandomNumber(75, 100));
        break;
      default:
        setState(0);
    }
  }, [range]);

  return state;
}

const App = () => {
  const [range, setRange] = useState("");
  const value = useRandomNumber(range);

  const handleChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="App">
      <h1>Rastgele Sayı</h1>
      <div className="Child">
        <div className="Input">
          <label>0 - 25</label>
          <input
            type="radio"
            value="0-25"
            checked={range === "0-25"}
            onChange={handleChange}
          />
        </div>
        <div className="Input">
          <label>25 - 50</label>
          <input
            type="radio"
            value="25-50"
            checked={range === "25-50"}
            onChange={handleChange}
          />
        </div>
        <div className="Input">
          <label>50 - 75</label>
          <input
            type="radio"
            value="50-75"
            checked={range === "50-75"}
            onChange={handleChange}
          />
        </div>
        <div className="Input">
          <label>75 - 100</label>
          <input
            type="radio"
            value="75-100"
            checked={range === "75-100"}
            onChange={handleChange}
          />
        </div>
      </div>
      <h2>{value}</h2>
    </div>
  );
};

export default App;
