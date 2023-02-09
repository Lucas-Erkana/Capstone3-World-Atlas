import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import HomePage from '../HomePage';

describe('Testing the HomePage component', () => {
  it('The HomePage component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
