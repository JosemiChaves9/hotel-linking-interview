import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IoPersonCircle,
  IoKey,
  IoCheckmark,
  IoAtOutline,
} from 'react-icons/io5';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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
  const [error, setError] = useState({ visibility: false, message: [''] });

  const onSubmit = ({
    name,
    email,
    password,
    password_confirmation,
  }: userCredentials) => {
    setError({ visibility: false, message: [''] });

    ApiService.register(name, email, password, password_confirmation).then(
      (res) => {
        if (!res) {
          history.push('/error');
          return;
        }
        if (res.status !== 201) {
          const arr = new Array(Object.values(res.data));
          const errorMessages = arr[0].map((message: any) => message[0]);
          setError({
            visibility: true,
            message: errorMessages,
          });
          return;
        }
        ApiService.login(email, password).then((res) => {
          LocalStorageService.setToken(res.data.access_token);
          history.push('/');
          window.location.reload();
        });
      }
    );
  };
  return (
    <>
      <div className='container-fluid vh-100 mt-5'>
        <div className='mt-3'>
          <div className='rounded d-flex justify-content-center'>
            <div className='col-md-4 col-sm-12 shadow-lg p-5 bg-light'>
              <div className='text-center'>
                <h3 className='text-primary'>Sign Up</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-4'>
                  <div className='input-group mb-3'>
                    <span className='input-group-text bg-primary'>
                      <IoPersonCircle color='white' size='24px' />
                    </span>
                    <input
                      {...register('name')}
                      required
                      type='text'
                      className='form-control'
                      placeholder='Name'
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <span className='input-group-text bg-primary'>
                      <IoAtOutline color='white' size='24px' />
                    </span>
                    <input
                      {...register('email')}
                      required
                      type='email@example.com'
                      className='form-control'
                      placeholder='example@mail.com'
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
                      placeholder='Password'
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <span className='input-group-text bg-primary'>
                      <IoCheckmark color='white' size='24px' />
                    </span>
                    <input
                      {...register('password_confirmation')}
                      required
                      type='password'
                      className='form-control'
                      placeholder='Password confirm'
                    />
                  </div>

                  {error.visibility && (
                    <>
                      {error.message.map((messages) => (
                        <div className='alert alert-danger' role='alert'>
                          {messages}
                        </div>
                      ))}
                    </>
                  )}

                  <button
                    className='btn btn-primary text-center mt-2'
                    type='submit'>
                    Signup
                  </button>

                  <p className='text-center mt-5'>
                    Alrrady have an account?
                    <Link to='/login'>
                      <span className='text-primary'>Log in</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
