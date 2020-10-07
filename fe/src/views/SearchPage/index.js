import React, { useEffect } from "react";
import { useStateValue } from "../../providers/StateProvider";
import useGoogleSearch from "../../hooks/useGoogleSearch";

import { Link } from "react-router-dom";
import Search from "../../components/Search";
import "./index.css";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";

function SearchPage() {
  
  // Grab val from context api provider.
  const [{ term }, dispatch] = useStateValue();
  let { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google logo"
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data !== null && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            {/* About {data !== undefined && (data?.searchInformation?.formattedTotalResults)} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term} */}
          </p>
          {data.data.items.map((item) => (
            <div className="searchPage__result" key={item.title}>
              {item.pagemap?.cse_image !== undefined && (
                <a href={item.link}>
                  <img
                    src={item.pagemap?.cse_image[0]?.src}
                    className="searchPage__resultImage"
                  />
                </a>
              )}

              <a href={item.link}>{item.displayLink}</a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
