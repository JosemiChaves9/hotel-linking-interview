import { useContext, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { UserContext } from '../context';

export const OfferCard = ({
  offer_name,
  offer_id,
}: {
  offer_name: string;
  offer_id: string;
}) => {
  const { user } = useContext(UserContext);
  const [obtained, setObtained] = useState(false);
  const obtainOffer = (offer_id: string, user_id: string) => {
    ApiService.obtainOffer(offer_id, user_id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setObtained(true);
      }
    });
  };

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{offer_name}</h5>
          <p className='card-text'>Get this awesome offer of {offer_name}</p>
          {obtained ? (
            <button
              onClick={() => {
                user && obtainOffer(offer_id, user.user_id);
              }}
              className='btn btn-success'>
              Offer obtained!
            </button>
          ) : (
            <button
              onClick={() => {
                user && obtainOffer(offer_id, user.user_id);
              }}
              className='btn btn-primary'>
              Obtain this offer!
            </button>
          )}
        </div>
      </div>
    </>
  );
};
