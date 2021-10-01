import { Header } from '../../components/header/Header';
import { OfferCard } from '../../components/offerCard/OfferCard';

export const MyOffers = () => {
  return (
    <>
      <Header message="The offers you've obtained" />
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
