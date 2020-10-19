import { useEffect, useState } from "react";
import axios from "axios";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(term);
  useEffect(() => {
    const fetchData = async () => {
      await axios(`https://www.googleapis.com/customsearch/v1?key${process.env.API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}
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
