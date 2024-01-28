import Input from 'components/ui/input';
import Modal from 'components/ui/modal';
import useLogin from 'hooks/useLogin';
import useSearchParams from 'hooks/useSearchParams';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';

function LoginModal() {
  const { getParams, setParams } = useSearchParams();
  const params = getParams();

  const { login, isLoading, error, setError } = useLogin();
  const [inputValues, setInputValues] = useState({
    username: 'mor_2314',
    password: '83r5^_',
  });

  const handleTextChange = (name: string, value: string) => {
    setInputValues((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(inputValues);
  };

  const handleOpen = () => {
    setParams({ ...getParams(), login: true });
    setError('');
    setInputValues({
      username: 'mor_2314',
      password: '83r5^_',
    });
  };
  const handleClose = () => {
    delete params.login;
    setParams(params);
  };

  const loginForm = (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="flex flex-col w-full items-center">
        <Input
          onChange={handleTextChange}
          name="username"
          value={inputValues.username}
          placeholder="Username"
          parentClassName="w-full max-w-[350px] mb-6"
          required
          label="Email"
        />
        <Input
          onChange={handleTextChange}
          name="password"
          value={inputValues.password}
          type="password"
          placeholder="Password"
          parentClassName="w-full max-w-[350px] mb-3"
          required
          label="Password"
        />
        {error && (
          <p className="text-red-500 text-center max-w-[400px] px-1">{error}</p>
        )}
        <button
          className="bg-white py-1 px-10 w-fit m-auto mt-6"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );

  const content = (
    <div className="flex justify-center flex-col items-center">
      <img className="mb-4" src="/images/loginIcon.png" alt="login" />
      <h4 className="text-4xl text-white mb-14">Welcome to CLOSET</h4>
      {loginForm}
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={!!params.login}
        onClose={handleClose}
        title=""
        className="bg-[#3E5673] rounded-[20px] shadow-modal p-0 pb-16 max-w-[560px]"
      >
        {content}
      </Modal>
      <FaRegUser
        className="text-2xl text-[#3E5674] cursor-pointer"
        onClick={handleOpen}
      />
    </div>
  );
}
export default LoginModal;
