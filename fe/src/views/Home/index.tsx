import React, { useEffect, Suspense } from "react";
import "./index.css";
import axios from 'axios';
import Search from "../../components/Search";

function Home() {
  useEffect(() => {
      axios.get('http://localhost:5000/posts/')
      .then((res) => {
      }).catch(err => {
        console.log('err', err);
      })
  }, []);

  return (
    <div className="home">
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
      </div>
      <div className="home__inputContainer">
        
        {/* Lazy Load component  */}
        <Suspense fallback={<div></div>}>
          <Search />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
