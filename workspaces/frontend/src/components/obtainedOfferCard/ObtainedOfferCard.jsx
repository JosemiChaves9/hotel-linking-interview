import { useContext, useEffect } from 'react';
import { ApiService } from '../../services/ApiService';
import { UserContext } from '../context';

export const ObtainedOfferCard = ({ offer_name, offer_id }) => {
  const { user } = useContext(UserContext);

  const redeemOfer = (offer_id, user_id) => {
    ApiService.redeemOffer(offer_id, user_id).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  return (
    <article className='card'>
      <h3>{offer_name}</h3>
      <button onClick={() => redeemOfer(offer_id, user.user_id)}>
        Redeem this offer
      </button>
    </article>
  );
};