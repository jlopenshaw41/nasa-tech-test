import "../styles/App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App" data-testid="app">
      <img className="logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" />
      <Search />
    </div>
  );
}

export default App;
