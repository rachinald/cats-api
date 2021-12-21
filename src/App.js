import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    setData(data[0]);
  };

  const [count, setCount] = useState(1);

  useEffect(() => {
    handleFetch();
  }, [count]);

  return (
    <div className="app">
      <img alt="cat" src={data.url} />
      <p>You have met {count} kitties!</p>
      <button
        class="card"
        onClick={() => setCount(count + 1) && { handleFetch }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
