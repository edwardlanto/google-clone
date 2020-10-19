import { useEffect, useState, useRef } from "react";
import axios from "axios";
const API_KEY =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_KEY
    : process.env.API_KEY;

const useGoogleSearch = (term) => {
  const [data, setData] = useState(term);
  useEffect(() => {
    const fetchData = async () => {
      await axios(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCZKLMtht6y0R5lui9ow-FrHU7hwLafTXE&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}
      `).then((res) => setData(res));
    };

    if (term === null) {
      // Deep linking search component
      const url = new URL(window.location.href);
      term = url.searchParams.get("term");
    }

    fetchData();
  }, [term]);

  return {
    data,
  };
};

export default useGoogleSearch;
