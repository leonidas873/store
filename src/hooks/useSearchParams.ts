/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useCallback } from 'react';
import { useSearchParams as useReactRouterSearchParams } from 'react-router-dom';

/**
 * Custom hook to get and set URL search parameters
 */

type TValue = string | null | number | boolean;

const useSearchParams = () => {
  const [searchParams, setSearchParams] = useReactRouterSearchParams();

  const getParams = useCallback((): Record<string, TValue> => {
    const params: Record<string, TValue> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  const setParams = useCallback(
    (newParams: Record<string, TValue>) => {
      const updatedSearchParams = new URLSearchParams();

      for (const key in newParams) {
        let param = newParams[key];
        if (newParams[key] !== null) {
          param = typeof param !== 'string' ? JSON.stringify(param) : param;
          updatedSearchParams.set(key, param);
        }
      }

      setSearchParams(updatedSearchParams);
    },
    [setSearchParams],
  );
  const deleteParam = useCallback(
    (key: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete(key);
      setSearchParams(updatedSearchParams);
    },
    [searchParams, setSearchParams],
  );
  return { getParams, setParams, deleteParam };
};

export default useSearchParams;
