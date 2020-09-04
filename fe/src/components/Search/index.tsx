import React, { useState, useEffect } from "react";
import "./index.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from '../../providers/StateProvider';
import { actionTypes } from "../../reducers";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState<any>("");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const search = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });

    history.push(`/search?term=${input}`);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    let term = url.searchParams.get("term");
    setInput(term);
  }, []);



  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button className="search__buttonsHidden" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;