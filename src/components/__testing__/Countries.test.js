import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import Countries from '../Countries';

describe('Testing the Countries component', () => {
  it('The Countries component should match the snapshot: ', () => {
    const picker = render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    expect(picker).toMatchSnapshot();
  });
});
