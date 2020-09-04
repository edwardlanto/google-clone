import React from "react";
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
  const { data } = useGoogleSearch(term);
  console.log('data', data);
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
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/image">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">Shoppings</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
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
            {/* About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term} */}
          </p>
          {data.data.items.map((item: any) => (
            <div className="searchPage__result" key={item.title}>
              <a href={item.link}>
                  <img
                    src={
                      item.pagemap?.cse_image &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    className="searchPage__resultImage"
                  />
              </a>
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
