import { useContext } from 'react';
import { ApiService } from '../../services/ApiService';
import { UserContext } from '../context';
import './index.scss';

export const OfferCard = ({ offer_name, offer_id }) => {
  const { user } = useContext(UserContext);

  const obtainOffer = (offer_id, user_id) => {
    ApiService.obtainOffer(offer_id, user_id).then((res) => {
      console.log(res);
      //window.location.reload();
    });
  };
  return (
    <div className='card'>
      <h3>{offer_name}</h3>
      <button onClick={() => obtainOffer(offer_id, user.user_id)}>
        Obtain this offer
      </button>
    </div>
  );
};
