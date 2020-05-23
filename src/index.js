/**
 *Importing Libraries 
 React, javascript library to build ui
 React DOM , takes care of updating the DOM to match the React elements.
 Search, code for searching songs
 Rebass, react styled components  
 */
import { Router, navigate } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import { Box } from "rebass";

/**
 * An element describes what you want to see on the screen
 *element , which takes the result and return it with specific style
 */
const goToSong = song => {
  const artist = encodeURIComponent(song.artist.name.toUpperCase());
  const songName = encodeURIComponent(song.title.toUpperCase());
  navigate(`/${artist}/${songName}`);
};

/**
 * The app which calls the search code, we define the path
 */
function App() {
  return (
    <div className="App">
      <Search path="/" onSelect={goToSong} />
    </div>
  );
}

/**
 * rootElement,everything inside it will be managed by React DOM.
Applications built with just React usually have a single root DOM node. But,
we integrate React into an app and we render a React element into a root DOM node, pass both to ReactDOM.render():
 * Insert into box , to define the style of the page and then
 * call the App
 */
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Box
    sx={{
      px: 4,
      py: 6,
      backgroundImage:
        "url('https://source.unsplash.com/vC8wj_Kphak/4488×3366')",
      backgroundSize: "cover",
      borderRadius: 8
    }}
  >
    <App />
  </Box>,
  rootElement
);
