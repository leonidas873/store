import { useState, useEffect } from 'react';
import axiosInstance from 'services/axiosInstance';

const useFetchData = <T>(path: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(path, { signal });
        setData(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [path]);

  return { loading, data, error };
};

export default useFetchData;
