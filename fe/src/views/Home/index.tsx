import React, { useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import axios from 'axios';
import Search from "../../components/Search";
// const Search = React.lazy(() => import ("../../components/Search"));

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
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
      </div>
      <div className="home__inputContainer">
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
