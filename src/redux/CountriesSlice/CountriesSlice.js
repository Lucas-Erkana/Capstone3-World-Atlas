// Actions
const SET_COUNTRIES = 'countries/countries/SET_COUNTRIES';
const SET_MAP = 'countries/countries/SET_MAP';
const SET_FILTER = 'countries/countries/SET_FILTER';
const BASE_API_LINK = 'https://restcountries.com/v3.1/all';

// initial state
const initialState = {
  countries: [],
  map: 'Select a continent',
};

// helper function
const compare = (a, b) => {
  if (a.name.common < b.name.common) {
    return -1;
  }
  if (a.name.common > b.name.common) {
    return 1;
  }
  return 0;
};

// Reducer
export default function countriesSlice(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case SET_MAP:
      return {
        ...state,
        map: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
const settingCountriesAction = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

const settingMapAction = (continent) => ({
  type: SET_MAP,
  payload: continent,
});

const settingFilterAction = (continent) => ({
  type: SET_FILTER,
  payload: continent,
});

const fetchCountriesData = () => async (dispatch) => {
  await fetch(BASE_API_LINK)
    .then((result) => result.json())
    .then((response) => {
      const countries = response.map((item) => ({
        name: {
          common: item.name.common,
          official: item.name.official,
        },
        currencies: item.currencies,
        capital: item.capital,
        languages: item.languages,
        borders: item.borders,
        area: item.area,
        population: item.population,
        continents: item.continents,
        flags: item.flags,
      }));
      countries.sort(compare);
      dispatch(settingCountriesAction(countries));
    });
};

export { fetchCountriesData, settingMapAction, settingFilterAction };
