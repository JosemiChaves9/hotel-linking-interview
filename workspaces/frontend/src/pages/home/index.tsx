import { Header } from '../../components/header/Header';
import { OfferCard } from '../../components/offerCard/OfferCard';

export const Home = () => {
  return (
    <>
      <Header message='Awesome offers for you!' />
      <div className='gridContainer'>
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </>
  );
};
