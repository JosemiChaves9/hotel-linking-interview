import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';
import { IoAtOutline, IoKey } from 'react-icons/io5';
import { Link } from 'react-router-dom';
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
                    type='password'
                    className='form-control'
                    placeholder='password'
                  />
                </div>

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
