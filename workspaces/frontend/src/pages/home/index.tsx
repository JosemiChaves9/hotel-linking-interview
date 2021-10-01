import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../components/context';
import { Header } from '../../components/header/Header';
import { OfferCard } from '../../components/offerCard/OfferCard';
import { ApiService } from '../../services/ApiService';
import { ApiOffer } from '../../types';
import './index.scss';

export const Home = () => {
  const { user } = useContext(UserContext);
  const [offers, setOffers] = useState<ApiOffer[]>([]);
  useEffect(() => {
    ApiService.getOffers().then((res: any) => {
      if (res.data) {
        setOffers(res.data);
      } else {
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className='gridContainer m-3'>
        {offers.map((offer: ApiOffer) => (
          <OfferCard offer_name={offer.offer_name} offer_id={offer.offer_id} />
        ))}
      </div>
    </>
  );
};
