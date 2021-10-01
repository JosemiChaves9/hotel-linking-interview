import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';

type userCredentials = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = ({
    name,
    email,
    password,
    password_confirmation,
  }: userCredentials) => {
    ApiService.register(name, email, password, password_confirmation).then(
      () =>
        ApiService.login(email, password).then((res) => {
          LocalStorageService.setToken(res.data.access_token);
          history.push('/');
        }),
      (rej) => console.log(rej)
    );
  };

  return (
    <>
      <h1>Im a Signup page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} type='text' placeholder='name' />
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
        <input
          {...register('password_confirmation')}
          type='password'
          placeholder='********'
        />
        <button>Send</button>
      </form>
    </>
  );
};
