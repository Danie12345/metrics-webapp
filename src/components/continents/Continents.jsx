import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/continentCountries/continentCountries';

import store from '../../redux/configureStore';

const Continents = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [continent, setContinent] = useState('Africa');
  const continentSelect = (e) => {
    setContinent(e.target.value);
    getCountries(dispatch, store.getState, e.target.value);
  };

  useEffect(() => {
    getCountries(dispatch, store.getState, continent);
  }, []);

  return (
    <div className="countries">
      <select
        value={continent}
        onChange={(e) => continentSelect(e)}
        className="browser-default custom-select"
      >
        {
          continents.map(
            (continent) => <option value={continent} key={continent}>{continent}</option>,
          )
        }
      </select>
      <ul className="country-list">
        {countries && countries.map((country) => (
          <li className="country" key={country.name.common}>
            <div>{country.name.common}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
