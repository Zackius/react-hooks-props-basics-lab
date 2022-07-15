import React from "react";
import user from "../data/user";
import App from "./App";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: user.color }}>
        {user.name} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}

export default Home;
