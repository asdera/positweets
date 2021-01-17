import React, {Component} from "react";

import "./App.css";
import { Dish } from "./Dish";

import $ from "jquery";

function login() {
  window.location.href = "login.html";
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
        }

        this.updateTweets = this.updateTweets.bind(this);
        this.updateTweetsCallback = this.updateTweetsCallback.bind(this);
    }

    updateTweetsCallback(data) {
        let newTweets = [];
        for (let i=0; i<data.length; ++i) {
            newTweets.push( <Dish
                name={data[i].username}
                tweetText={data[i].text} /> );
        }

        this.setState({tweets: newTweets});
    }

    updateTweets() {
        $.getJSON("/get_tweets",
                  this.updateTweetsCallback);
    }

    render() {
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
        <button className="refresh" onClick={this.updateTweets}>refresh feed</button>
      <div className="tweets">
        {this.state.tweets}
      </div>
      </header>
    </div>
  );
    }
}
