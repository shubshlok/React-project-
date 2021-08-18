import logo from "./logo.svg";
import "./App.css";
import Ball from "./Component/Ball";

function App() {
  var Detail = [{ Tittle: "Shubham Pandey", Age: 24 }];
  return (
    <div className="App">
      <p>This is (aap.js)</p>
      <Ball Tittle={Detail[0].Tittle} Age={Detail[0].Age}></Ball>
    
    </div>
  );
}

export default App;
