import "./App.css";
import { Dish } from "./Dish";

function login() {
  window.location.href = "login.html";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> PosiTweet </h1>
        <p className="subtitle">~ no sad vibes allowed ~</p>
        <table>
          <button className="login" onClick={login}>
            login
          </button>
          <button className="signup">sign up!</button>
        </table>
        <button className="what">what's posifeed?</button>
      <div className="tweets">
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
        <Dish name="Tweet" />
      </div>
      </header>
    </div>
  );
}

export default App;
