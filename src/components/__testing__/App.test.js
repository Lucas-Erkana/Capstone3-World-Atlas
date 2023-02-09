import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from '../../utilities/testUtilities';
import App from '../../App';

describe('Testing the App component', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it('Checking if the HomePage renders correctly ', () => {
    const headerText = screen.getByText('Explore The World');
    expect(headerText).toBeTruthy();
    const homePageTxt = screen.getByText('No continent selected');
    expect(homePageTxt).toBeTruthy();
    const map = screen.getByTestId('map-div');
    expect(map).toBeTruthy();
    const select = screen.getByText('Select a continent');
    expect(select).toBeTruthy();
  });

  it('Checking that the countries will be rendered after selecting a continent ', () => {
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'Africa' } });
    const map = screen.getByAltText('African continent');
    expect(map.getAttribute('src')).toBe('afrique.png');
    const countriesList = screen.getByTestId('countries-list');
    expect(countriesList).toBeTruthy();
    expect(countriesList.childElementCount).toBe(1);
  });

  it('Checking that the country details page will be rendered after selecting a country:', () => {
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'Africa' } });
    const map = screen.getByAltText('African continent');
    expect(map.getAttribute('src')).toBe('afrique.png');
    const countriesList = screen.getByTestId('countries-list');
    expect(countriesList).toBeTruthy();
    const algerianFlag = screen.getByAltText("Algeria's Flag");
    fireEvent.click(algerianFlag);
    const name = screen.getByText("People's Democratic Republic of Algeria");
    expect(name).toBeTruthy();
    const currency = screen.getByText('DZD: Algerian dinar');
    expect(currency).toBeTruthy();
  });
});
