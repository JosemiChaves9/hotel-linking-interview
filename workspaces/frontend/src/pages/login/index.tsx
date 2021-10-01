import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    ApiService.login(email, password).then((res) => {
      LocalStorageService.setToken(res.data.access_token);
      history.push('/');
    });
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
