import { Link } from 'react-router-dom';

import './index.scss';
export const Header = ({
  userEmail,
  logout,
}: {
  userEmail: string;
  logout: () => void;
}) => {
  const path = window.location.pathname;
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-primary  '>
        <div className='container-fluid'>
          <div className=' w-100 order-1 order-md-0 '>
            <ul className='navbar-nav me-auto'>
              <Link to='/' className='text-decoration-none'>
                <li className='nav-item'>
                  <button
                    className={`nav-link btn btn-link ${
                      path === '/' && 'active'
                    }`}>
                    Offers
                  </button>
                </li>
              </Link>
              <Link to='/myOffers' className='text-decoration-none'>
                <button
                  className={`nav-link btn btn-link ${
                    path === '/myOffers' && 'active'
                  }`}>
                  My Offers
                </button>
              </Link>
            </ul>
          </div>

          <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item m-auto text-light '>
                Logged as: {userEmail}
              </li>
              <li className='nav-item'>
                <button
                  className='nav-link logout btn btn-link'
                  onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
