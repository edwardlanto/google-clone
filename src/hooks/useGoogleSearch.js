import { useEffect, useState } from "react";
import axios from "axios";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    const fetchData = () => {
      const url = new URL(window.location.href);
      const urlTerm = url.searchParams.get("term");
      axios(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}=${urlTerm ? urlTerm : term}
      `).then((res) => setData(res));
    };


    fetchData();
  }, [term]);

  return {
    data,
  };
};

export default useGoogleSearch;