import { useContext } from 'react';
import { ApiService } from '../../services/ApiService';
import { UserContext } from '../context';

export const OfferCard = ({ offer_name, offer_id }) => {
  const { user } = useContext(UserContext);

  const obtainOffer = (offer_id, user_id) => {
    ApiService.obtainOffer(offer_id, user_id).then((res) => {
      console.log(res);
      //window.location.reload();
    });
  };
  return (
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>{offer_name}</h5>
        <p class='card-text'>Get this awesome offer of {offer_name}</p>
        <a
          onClick={() => obtainOffer(offer_id, user.user_id)}
          class='btn btn-primary'>
          {' '}
          Obtain this offer
        </a>
      </div>
    </div>
  );
};
