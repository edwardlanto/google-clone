import React from "react";
import { useStateValue } from "../../providers/StateProvider";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import "./index.css";

function SearchPage() {

  // Grab val from context api provider.
  const [{ term }] = useStateValue();
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
        </div>
      </div>

      {data !== null && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.data?.searchInformation?.formattedTotalResults} results (
            {data?.data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data.data?.items.map((item) => {
            return (
              <div className="searchPage__result" key={item.displayLink}>
                {typeof(item.pagemap?.cse_image?.[0].src) === "string" && (
                  <a href={item.link}>
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      className="searchPage__resultImage"
                      alt={`${item} thumbnail`}
                    />
                  </a>
                )}

                <a href={item.link}>{item.displayLink}</a>
                <a href={item.link} className="searchPage__resultTitle">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
