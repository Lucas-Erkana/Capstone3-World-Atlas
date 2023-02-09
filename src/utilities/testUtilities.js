import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import countriesSlice from '../redux/CountriesSlice/CountriesSlice';

const rootState = {
  countries: {
    map: 'Select a continent',
    countries: [
      {
        name: {
          common: 'Afghanistan',
          official: 'Islamic Republic of Afghanistan',
        },
        currencies: {
          AFN: {
            name: 'Afghan afghani',
            symbol: '؋',
          },
        },
        capital: ['Kabul'],
        languages: {
          prs: 'Dari',
          pus: 'Pashto',
          tuk: 'Turkmen',
        },
        borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
        area: 652230,
        population: 40218234,
        continents: ['Asia'],
        flags: {
          png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
          svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
        },
      },
      {
        name: {
          common: 'Albania',
          official: 'Republic of Albania',
        },
        currencies: {
          ALL: {
            name: 'Albanian lek',
            symbol: 'L',
          },
        },
        capital: ['Tirana'],
        languages: {
          sqi: 'Albanian',
        },
        borders: ['MNE', 'GRC', 'MKD', 'UNK'],
        area: 28748,
        population: 2837743,
        continents: ['Europe'],
        flags: {
          png: 'https://flagcdn.com/w320/al.png',
          svg: 'https://flagcdn.com/al.svg',
        },
      },
      {
        name: {
          common: 'Algeria',
          official: "People's Democratic Republic of Algeria",
        },
        currencies: {
          DZD: {
            name: 'Algerian dinar',
            symbol: 'د.ج',
          },
        },
        capital: ['Algiers'],
        languages: {
          ara: 'Arabic',
        },
        borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
        area: 2381741,
        population: 44700000,
        continents: ['Africa'],
        flags: {
          png: 'https://flagcdn.com/w320/dz.png',
          svg: 'https://flagcdn.com/dz.svg',
        },
      },
    ],
  },
};

export default function renderWithProviders(
  ui,
  {
    preloadedState = rootState,
    store = configureStore({
      reducer: { countries: countriesSlice },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  /* eslint-disable-next-line */
  const Wrapp = ({ children }) => (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );

  // Return all of RTL's query functions and an object with the store
  return { store, ...render(ui, { wrapper: Wrapp, ...renderOptions }) };
}
