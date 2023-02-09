import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import ChoosedContinent from '../ChoosedContinent';

describe('Testing the ChoosedContinent component', () => {
  it('The ChoosedContinent component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <ChoosedContinent />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
