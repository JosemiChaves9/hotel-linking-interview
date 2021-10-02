import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../components/context';
import { Header } from '../../components/header/Header';
import { OfferCard } from '../../components/offerCard/OfferCard';
import { ApiService } from '../../services/ApiService';
import { LocalStorageService } from '../../services/LocalStorageService';
import { ApiOffer } from '../../types';
import './index.scss';

export const Home = () => {
  const [offers, setOffers] = useState<ApiOffer[]>([]);
  const history = useHistory();
  useEffect(() => {
    if (!LocalStorageService.getToken()) {
      history.push('/login');
      return;
    }
    ApiService.getOffers().then((res: any) => {
      if (!res) {
        history.push('/error');
        return;
      }
      if (res.data) {
        setOffers(res.data);
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
