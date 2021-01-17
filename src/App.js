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
        <button className="refresh">refresh feed</button>
      <div className="tweets">
        <Dish name="Tweet" tweetText="this is a tweet!" />
        <Dish name="Tweet" tweetText="this is a tweet!"/>
        <Dish name="Tweet" tweetText="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo mi"/>
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
