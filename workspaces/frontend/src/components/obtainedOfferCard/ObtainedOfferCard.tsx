import { useContext, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { UserContext } from '../context';

export const ObtainedOfferCard = ({
  offer_name,
  offer_id,
}: {
  offer_name: string;
  offer_id: string;
}) => {
  const { user } = useContext(UserContext);
  const [reedemed, setReedemed] = useState(false);

  const redeemOfer = (offer_id: string, user_id: string) => {
    ApiService.redeemOffer(offer_id, user_id).then((res) => {
      if (res.status === 200) {
        setReedemed(true);
      }
    });
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{offer_name}</h5>
        <p className='card-text'>Get this awesome offer of {offer_name}</p>
        {reedemed ? (
          <button
            onClick={() => {
              user && redeemOfer(offer_id, user.user_id);
            }}
            className='btn btn-success'>
            Offer reedemed!
          </button>
        ) : (
          <button
            onClick={() => {
              user && redeemOfer(offer_id, user.user_id);
            }}
            className='btn btn-primary'>
            Redeem this offer!
          </button>
        )}
      </div>
    </div>
  );
};
