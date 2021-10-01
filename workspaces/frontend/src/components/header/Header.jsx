import './index.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context';

export const Header = ({ message }) => {
  const { user } = useContext(UserContext);
  const path = window.location.pathname;
  return (
    <>
      <header className='headerTest'>
        <h2>{message}</h2>
        <nav>
          {path === '/' ? (
            <Link to='/myOffers'>
              <button>My Offers</button>
            </Link>
          ) : (
            <Link to='/'>
              <button>Offers</button>
            </Link>
          )}
          <button>Logout</button>
        </nav>
      </header>
    </>
  );
};
