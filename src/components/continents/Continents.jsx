import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import unidecode from 'unidecode';

import { getCountries } from '../../redux/continentCountries/continentCountries';
import { setContinent } from '../../redux/continent/continent';
import { setCountry } from '../../redux/country/country';
import store from '../../redux/configureStore';

import world from '../../assets/world.png';

import './Continents.css';

const Continents = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const continent = useSelector((state) => state.continent);
  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const continentSelect = (e) => {
    setCountry(dispatch, {});
    setContinent(dispatch, e.target.value);
    getCountries(dispatch, store.getState, e.target.value);
  };
  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };

  useEffect(() => {
    getCountries(dispatch, store.getState, continent);
    setCountry(dispatch, {});
  }, []);

  return (
    <div className="countries">
      <img
        src={world}
        alt="Background world."
        style={
          {
            width: '100%',
            position: 'fixed',
            top: '35%',
            zIndex: '1',
          }
        }
      />
      <select
        value={continent}
        onChange={(e) => continentSelect(e)}
        className="select-continent"
      >
        {
          continents.map(
            (continent) => <option value={continent} key={continent}>{continent}</option>,
          )
        }
      </select>
      <ul className="country-list">
        {countries && countries.map((country) => (
          <li className="country" key={country.name}>
            <NavLink
              to={`/continents/country/${unidecode(country.name.replace(/ /gi, '-'))}`}
              className="nav-link"
              onClick={() => countrySelect(country)}
            >
              <img alt={`${country.name}'s flag.`} src={country.flag} />
              <div className="country-info-small">
                <span>{country.name.toUpperCase()}</span>
                <span>{`Pop: ${country.population}`}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
