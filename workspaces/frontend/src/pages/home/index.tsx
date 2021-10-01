import { off } from 'process';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../components/context';
import { Header } from '../../components/header/Header';
import { OfferCard } from '../../components/offerCard/OfferCard';
import { ApiService } from '../../services/ApiService';
import { ApiOffer } from '../../types';

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
      <Header message={`Welcome ${user?.name}, check this offers!`} />
      {offers.map((offer: ApiOffer) => (
        <OfferCard offer_name={offer.offer_name} />
      ))}
      <div className='gridContainer'></div>
    </>
  );
};
