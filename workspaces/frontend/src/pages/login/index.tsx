import { useForm } from 'react-hook-form';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    ApiService.login(email, password).then((res) =>
      LocalStorageService.setToken(res.data.access_token)
    );
  };

  return (
    <>
      <h1>Im a Login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          type='email'
          placeholder='mail@example.com'
        />
        <input
          {...register('password')}
          type='password'
          placeholder='********'
        />
        <button>Send</button>
      </form>
    </>
  );
};
