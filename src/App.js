import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCountriesData } from './redux/CountriesSlice/CountriesSlice';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CountriesDetails from './components/CountriesDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <div className="Application">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:countryName" element={<CountriesDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
