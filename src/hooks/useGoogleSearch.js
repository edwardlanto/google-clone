import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_KEY
    : process.env.API_KEY;

const useGoogleSearch = (term) => {
  const [data, setData] = useState(term);
  useEffect(() => {
    const fetchData = async () => {
      const url = new URL(window.location.href);
      const urlTerm = url.searchParams.get("term");
      await axios(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}
      &cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${urlTerm ? urlTerm : term}
      `).then((res) => setData(res));
    };

    fetchData();
  }, [term]);

  return {
    data,
  };
};

export default useGoogleSearch;
