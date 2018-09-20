import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import List from "./components/List/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
        <input placeholder="disabled input" disabled />
        <section>
          <h2>Video Section</h2>
          <article>
            <h3>Video 1</h3>
            <video
              controls
              muted
              src="/assets/vid1.mp4"
              width="300"
              height="200"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </article>
        </section>
        <section>
          <h2>Audio Section</h2>
          <article>
            <h3>Audio 1</h3>
            <audio controls>
              <source src="horse.ogg" type="audio/ogg" />
              <source src="horse.mp3" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </article>
        </section>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
