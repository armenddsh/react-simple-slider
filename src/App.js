import React from "react";
import Slider from "./components/Slider/Slider";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Slider 
          images={[
            "https://picsum.photos/700/300?random=1",
            "https://picsum.photos/700/300?random=2",
            "https://picsum.photos/700/300?random=3",
            "https://picsum.photos/700/300?random=4",
            "https://picsum.photos/700/300?random=5"
          ]}
          interval={5000}
      />
    </div>
  );
}

export default App;
