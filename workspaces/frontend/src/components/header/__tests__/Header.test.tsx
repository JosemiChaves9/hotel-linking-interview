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

  // test('When clicks in logout, clear LocalStorage', () => {
  //   localStorage.setItem('access_token', '5e54dw4das5d');
  //   const logoutButton = component.getByText('Logout');
  //   console.log(logoutButton);
  //   fireEvent.click(logoutButton);
  //   console.log(localStorage.getItem('access_token'));

  //   expect(localStorage.getItem('access_token')).toBeUndefined;
  // });
});
