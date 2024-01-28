import axios from 'axios';
import { useState, useCallback } from 'react';
import { setIsLoggedIn } from 'redux/slices/userSlice';
import { useAppDispatch } from 'redux/store';
import axiosInstance from 'services/axiosInstance';
import useSearchParams from './useSearchParams';

interface IUseLogin {
  username: string;
  password: string;
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { deleteParam } = useSearchParams();

  const login = useCallback(
    async (data: IUseLogin) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.post('/auth/login', data);
        const { token } = response.data;
        localStorage.setItem('token', token);
        dispatch(setIsLoggedIn(true));
        deleteParam('login');
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const serverError = err.response?.data as string;
          setError(serverError || 'An unexpected error occurred');
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [deleteParam, dispatch],
  );

  return { login, isLoading, error, setError };
};

export default useLogin;
