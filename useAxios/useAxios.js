import { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (options, axiosInstance = defaultAxios) => {
  if (!options.url) {
    return;
  }

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const reload = () => {
    setState({
      ...state,
      loading: true
    });
    setReloadTrigger(new Date());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        if (data) {
          setState({
            ...state,
            loading: false,
            data: data.data.data.movies
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [reloadTrigger]);

  return { ...state, reload };
};

export default useAxios;
