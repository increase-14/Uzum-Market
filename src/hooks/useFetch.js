import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "DATA":
      return { ...state, data: payload };
    case "LOADING":
      return { ...state, isLoading: !state.isLoading };
    case "ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });

    axios
      .get(url)
      .then((res) => dispatch({ type: "DATA", payload: res.data.products }))
      .catch((err) =>
        dispatch({ type: "ERROR", payload: err.message || "Xatolik" })
      )
      .finally(() => dispatch({ type: "LOADING" }));
  }, [url]);

  return { ...state };
};

export default useFetch;