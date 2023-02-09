import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import CountriesDetails from '../CountriesDetails';

describe('Testing the CountriesDetails component', () => {
  it('The CountriesDetails component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <CountriesDetails />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
