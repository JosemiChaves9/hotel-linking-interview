import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../components/context';
import { Header } from '../../components/header/Header';
import { ObtainedOfferCard } from '../../components/obtainedOfferCard/ObtainedOfferCard';
import { ApiService } from '../../services/ApiService';
import { ApiOffer } from '../../types';
import './index.scss';

export const MyOffers = () => {
  const { user } = useContext(UserContext);
  const [offers, setOffers] = useState<ApiOffer[]>([]);
  useEffect(() => {
    if (user) {
      ApiService.getObtainedOffers(user.user_id).then((res) => {
        if (res.data) {
          setOffers(res.data);
        }
      });
    }
  }, [user]);
  return (
    <>
      <Header />
      <div className='gridContainer m-3'>
        {offers.map((offer) => (
          <ObtainedOfferCard
            offer_name={offer.offer_name}
            offer_id={offer.offer_id}
          />
        ))}
      </div>
    </>
  );
};
