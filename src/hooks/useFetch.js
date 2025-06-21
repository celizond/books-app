import { useEffect, useState } from "react";

export const useFetch = (url, transformFn) => {

  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    error: null,
  })

  const onFetch = async () => {
    try {
      // sleep
      /* await new Promise(resolve => setTimeout(resolve, 101500)); */

      const response = await fetch(url);
      const data = await response.json()

      setState({
        data: transformFn ? transformFn(data) : data,
        isLoading: false,
        hasError: false,
        error: null,
      })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: error,
      })
    }
  }

  useEffect(() => {
    if (!url) return;
    setState({...state, isLoading: true});
    onFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}