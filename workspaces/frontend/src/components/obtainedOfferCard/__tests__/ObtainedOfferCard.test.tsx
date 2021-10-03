import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ObtainedOfferCard } from '../ObtainedOfferCard';
export {};

const initialData = {
  offer_id: '545AQE65',
  offer_name: 'Test offer',
};
const component = render(
  <Router>
    <ObtainedOfferCard
      offer_id={initialData.offer_id}
      offer_name={initialData.offer_name}
    />
  </Router>
);

describe('Test of ObtainedOfferCard component', () => {
  test('Renders content', () => {
    component.getByText(initialData.offer_name);
    component.getByText('Redeem this offer!');
  });
});
