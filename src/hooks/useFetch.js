import { useEffect, useReducer } from "react";
import axios from "axios";

const init = { data: null, isLoading: true, error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return { ...state, isLoading: true, error: null };
    case "OK":
      return { ...state, isLoading: false, data: action.data };
    case "ERR":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    if (!url) return;
    dispatch({ type: "LOAD" });
    axios
      .get(url)
      .then((res) => {
        const data = res.data.products ?? res.data;
        dispatch({ type: "OK", data });
      })
      .catch((err) => {
        dispatch({ type: "ERR", error: err.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
