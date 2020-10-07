import React, { useEffect, Suspense, useState } from "react";
import "./index.css";
import axios from "axios";
import Search from "../../components/Search";
import { ReactMic } from "react-mic";

function Home() {
  const [record, toggleRecord] = useState(false);

  const startRecording = () => {
    toggleRecord(true);
  };

  const stopRecording = () => {
    toggleRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <div className="home">
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
      </div>
      <ReactMic record={record} onStop={onStop} onData={onData} />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
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
