import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';
import { IoAtOutline, IoKey } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState({ visibility: false, message: '' });
  const history = useHistory();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setError({ visibility: false, message: '' });
    ApiService.login(email, password).then((res) => {
      if (!res) {
        history.push('/error');
        return;
      }
      if (res.status !== 200) {
        setError({ visibility: true, message: res.data.error });
        return;
      }
      LocalStorageService.setToken(res.data.access_token);
      history.push('/');
      window.location.reload();
    });
  };

  return (
    <div className='container-fluid vh-100 mt-5'>
      <div className='mt-3'>
        <div className='rounded d-flex justify-content-center'>
          <div className='col-md-4 col-sm-12 shadow-lg p-5 bg-light'>
            <div className='text-center'>
              <h3 className='text-primary'>Sign In</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='p-4'>
                <div className='input-group mb-3'>
                  <span className='input-group-text bg-primary'>
                    <IoAtOutline color='white' size='24px' />
                  </span>
                  <input
                    {...register('email')}
                    required
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='input-group mb-3'>
                  <span className='input-group-text bg-primary'>
                    <IoKey color='white' size='24px' />
                  </span>
                  <input
                    {...register('password')}
                    required
                    type='password'
                    className='form-control'
                    placeholder='password'
                  />
                </div>
                {error.visibility && (
                  <div className='alert alert-danger  ' role='alert'>
                    {error.message}
                  </div>
                )}
                <button
                  className='btn btn-primary text-center mt-2'
                  type='submit'>
                  Login
                </button>

                <p className='text-center mt-5'>
                  Don't have an account?{' '}
                  <Link to='/signup'>
                    <span className='text-primary'> Sign Up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
