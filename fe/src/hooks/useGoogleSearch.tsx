import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY_DEV = process.env.REACT_APP_API_KEY;

const API_KEY = process.env.NODE_ENV === 'development' ? API_KEY_DEV : process.env.API_KEY;
const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;

const useGoogleSearch = (term: any) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}
      &cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}
      `).then((res) => setData(res));
    };
    fetchData();
  }, [term]);

  return {
    data,
  };
};

export default useGoogleSearch;
