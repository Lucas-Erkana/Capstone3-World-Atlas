import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import Header from '../Header';

describe('Testing the Header component', () => {
  it('The Header component should match the snapshot: ', () => {
    const picker = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(picker).toMatchSnapshot();
  });
});
