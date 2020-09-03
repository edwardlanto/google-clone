import React, { useEffect, useState } from "react";
import API_KEY from "../keys";
import axios from "axios";

const CONTEXT_KEY = "a6733d3b6223d59bb";
const useGoogleSearch = (term: any) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}
      &cx=${CONTEXT_KEY}&q=${term}
      `)
      .then(res => setData(res))
    }
    fetchData();
  }, [term]);

  return {
    data
  }
};

export default useGoogleSearch;
