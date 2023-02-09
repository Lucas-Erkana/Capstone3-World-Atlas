import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import WorldMap from '../WorldMap';

describe('Testing the WorldMap component', () => {
  it('The WorldMap component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <WorldMap />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
