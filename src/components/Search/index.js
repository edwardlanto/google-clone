import React, { useState } from "react";
import "./index.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers";
import axios from "axios";

function Search({ hideButtons = false }) {
  const url = new URL(window.location.href);
  let _term = url.searchParams.get("term");
  const [input, setInput] = useState(() => _term ? _term : "");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const search = async (lucky) => {

    // If lucky button is pressed
    if (lucky === false) {
      history.push(`/search?term=${input}`);
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: _term !== null ? _term : input
      });
    } else if (lucky === true) {
      // This is for if the user presses "I'm feeling lucky" to redirect them.
      const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDx6QVpLxxHK8NyjDKSk_bDD_IhJyXdr80
      &cx=AIzaSyDx6QVpLxxHK8NyjDKSk_bDD_IhJyXdr80&q=${input}`);
      const windowLocation = res.data.items[0].formattedUrl;
      window.location.href = windowLocation;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    // This url is used to save term state onreload
    history.push(`/search?term=${input}`);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <form className="search" onSubmit={(e) => submit(e)}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={() => search(false)}>Google Search</Button>
          <Button onClick={() => search(true)}>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div></div>
      )}
    </form>
  );
}

export default Search;