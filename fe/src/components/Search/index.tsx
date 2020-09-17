import React, { useState, useEffect } from "react";
import "./index.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers";
import axios from 'axios';

function Search({ hideButtons = false }) {
  const [input, setInput] = useState<any>("");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();


  const search = async (lucky: Boolean) => {
    if(lucky === false){
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      history.push(`/search?term=${input}`);
    }else{

      // This is for if the user presses "I'm feeling lucky" to redirect them.
      const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}
      &cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${input}`);
      const windowLocation = res.data.items[0].formattedUrl;
      window.location.href = windowLocation;
    }
  }

  
 

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
          <Button onClick={() => search(false)}>Google Search</Button>
          <Button onClick={() => search(true)}>I'm Feeling Lucky test</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="button"
            onClick={() => search(false)}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
