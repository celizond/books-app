import { useEffect, useState } from 'react';

export const useFetch = (url, transformFn, fetchName, title) => {

  const [state, setState] = useState({
    data: JSON.parse(localStorage.getItem(fetchName))?.[0] || null,
    isLoading: false,
    hasError: false,
    error: null,
  })

  const onFetch = async () => {
    try {
      // sleep para pruebas
      await new Promise(resolve => setTimeout(resolve, 2500));

      const response = await fetch(url);
      const data = await response.json();

      setState({
        data: transformFn ? transformFn(data, title) : data,
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
    setState({ ...state, isLoading: true });
    onFetch();
  }, [url])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(fetchName) || '{}');
    const firstKey = Object.keys(stored)[0];
    if (firstKey) setState({ ...state, data: stored[firstKey] || null });
  }, []);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}