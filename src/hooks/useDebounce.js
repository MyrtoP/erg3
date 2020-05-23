/**
 * a function where we make the  API calls to fetch the search data
 * and to make it performant we dont make the API call for every character
 * that is input by the user, but only after the user input stops for some milliseconds.
 */

import { useEffect, useState } from "react";
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
