import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const useAxios = (options, axiosInstance = defaultAxios) => {
  if (!options.url) {
    return;
  }

  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: null
  });
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const reload = () => {
    setState({
      ...state,
      isLoading: true
    });
    setReloadTrigger(new Date());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        if (data) {
          setState({
            ...state,
            isLoading: false,
            data
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          isLoading: false,
          error
        });
      });
  }, [reloadTrigger]);

  return { ...state, reload };
};