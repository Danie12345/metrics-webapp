import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
            <NavLink to={country.name.common} className="nav-link">
              <span>{country.name.common.toUpperCase()}</span>
              <img style={{ width: '120px', height: 'auto' }} alt={`${country.name}'s flag.`} src={country.flag} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
