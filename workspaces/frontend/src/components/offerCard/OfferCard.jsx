import { useContext, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { UserContext } from '../context';

export const OfferCard = ({ offer_name, offer_id }) => {
  const { user } = useContext(UserContext);
  const [obtained, setObtained] = useState(false);
  const obtainOffer = (offer_id, user_id) => {
    ApiService.obtainOffer(offer_id, user_id).then((res) => {
      if (res.status === 200) {
        setObtained(true);
      }
    });
  };

  return (
    <>
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title'>{offer_name}</h5>
          <p class='card-text'>Get this awesome offer of {offer_name}</p>
          {obtained ? (
            <button
              onClick={() => {
                obtainOffer(offer_id, user.user_id);
              }}
              class='btn btn-success'>
              Offer obtained!
            </button>
          ) : (
            <button
              onClick={() => {
                obtainOffer(offer_id, user.user_id);
              }}
              class='btn btn-primary'>
              Obtain this offer!
            </button>
          )}
        </div>
      </div>
    </>
  );
};
