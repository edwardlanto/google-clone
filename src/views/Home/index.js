import React from "react";
import "./index.css";
import Search from "../../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
      </div>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}

export default Home;
