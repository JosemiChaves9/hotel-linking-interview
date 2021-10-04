import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../Header';
import { fireEvent } from '@testing-library/dom';
import { LocalStorageService } from '../../../services/LocalStorageService';
export {};

const component = render(
  <Router>
    <Header
      userEmail={'test@test.com'}
      logout={() => LocalStorageService.removeItem('access_token')}
    />
  </Router>
);

describe('Tests for the header component', () => {
  test('renders content', () => {
    component.getByText('Offers');
  });
});
