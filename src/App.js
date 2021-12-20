import "./App.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    setData(data[0]);
  };

  return (
    <div className="App">
      {/* if the element before && is true, it will execute the following code */}
      {data.url && <img alt="cat" src={data.url} />}
      <button class="card" onClick={handleFetch}>
        Click me
      </button>
    </div>
  );
};

export default App;
