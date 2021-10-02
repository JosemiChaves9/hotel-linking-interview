import { Link } from 'react-router-dom';
import './index.scss';

export const Page404 = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-12 col-sm-12'>
        <div className='card2 shadow-lg border-0 rounded-lg mt-5 mx-auto w-50'>
          <h3 className='card-header2 display-1 text-muted text-center'>404</h3>

          <span className='card-subtitle mb-2 text-muted text-center'>
            Page Could Not Be Found
          </span>

          <div className='card-body mx-auto'>
            <Link to='/'>
              <a
                type='button'
                href='#'
                className='btn btn-sm btn-info text-white'>
                {' '}
                Back To Home{' '}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
