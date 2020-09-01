import React, { useEffect, useState } from "react";
import API_KEY from "../keys";

const CONTEXT_KEY = "a6733d3b6223d59bb";
const useGoogleSearch = (term: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchData = async() => {
          fetch(
              `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
              &cx=${CONTEXT_KEY}&q=${term}
              `
          )
          .then(res => res.json())
          .then(res => {
              setData(res);
          })
      }

      fetchData();
      return data
  }, [term]);
};

useGoogleSearch;
