import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context';
import { LocalStorageService } from '../../services/LocalStorageService';
import { useHistory } from 'react-router';
export const Header = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const path = window.location.pathname;
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-primary  '>
        <div className='container-fluid'>
          <div className=' w-100 order-1 order-md-0 '>
            <ul className='navbar-nav me-auto'>
              <Link to='/' className='text-decoration-none'>
                <li className='nav-item'>
                  <a className={`nav-link ${path === '/' && 'active'}`}>
                    Offers
                  </a>
                </li>
              </Link>
              <Link to='/myOffers' className='text-decoration-none'>
                <li className='nav-item' to={'/signup'}>
                  <a className={`nav-link ${path === '/myOffers' && 'active'}`}>
                    My Offers
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
            {user && (
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <a className='nav-link active'>Logged as: {user.email}</a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    onClick={() => {
                      LocalStorageService.removeItem('access_token');
                      history.push('/login');
                    }}>
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
