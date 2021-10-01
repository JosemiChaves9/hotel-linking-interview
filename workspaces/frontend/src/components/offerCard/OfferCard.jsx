import './index.scss';

export const OfferCard = ({ offer_name }) => {
  return (
    <article className='card'>
      <h3>{offer_name}</h3> <button>Obtain this offer</button>
    </article>
  );
};
