import './index.scss';

export const Header = ({ message }) => {
  return (
    <>
      <header className='headerTest'>
        <h2>{message}</h2>
        <nav>
          <button>Offers</button>
          <button>Your offers</button>
        </nav>
      </header>
    </>
  );
};
