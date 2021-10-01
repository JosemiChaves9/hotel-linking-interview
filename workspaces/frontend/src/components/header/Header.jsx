import { Link } from 'react-router-dom';
import { Children, useContext } from 'react';
import { UserContext } from '../context';

export const Header = () => {
  const { user } = useContext(UserContext);
  const path = window.location.pathname;
  return (
    <>
      <nav class='navbar navbar-expand-md navbar-dark bg-primary  '>
        <div class='container-fluid'>
          <div class='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
            <ul class='navbar-nav me-auto'>
              <Link to='/' className='text-decoration-none'>
                <li class='nav-item'>
                  <a class={`nav-link ${path === '/' && 'active'}`}>Offers</a>
                </li>
              </Link>
              <Link to='/myOffers' className='text-decoration-none'>
                <li class='nav-item' to={'/signup'}>
                  <a class={`nav-link ${path === '/myOffers' && 'active'}`}>
                    My Offers
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <div class='navbar-collapse collapse w-100 order-3 dual-collapse2'>
            <ul class='navbar-nav ms-auto'>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  {/* Logged as: {user.email} */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
