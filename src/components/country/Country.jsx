import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCountry } from '../../redux/country/country';
import { getCurrentPollution, removePollutionData } from '../../redux/currentPollution/currentPollution';

import './Country.css';

const Country = () => {
  const dispatch = useDispatch();
  const continent = useSelector((state) => state.continent);
  const country = useSelector((state) => state.country);
  const pollution = useSelector((state) => state.pollution);
  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };
  const back = () => {
    countrySelect({});
    removePollutionData(dispatch);
  };
  const status = {
    1: ['Good', '#0f0'],
    2: ['Moderate', '#66ff00'],
    3: ['Unhealthy', '#eeff00'],
    4: ['Very Unhealthy', '#ff7300'],
    5: ['Hazardous', '#ff2600'],
  };

  useEffect(() => {
    dispatch(getCurrentPollution);
  }, []);

  return (
    <div className="country">
      <div>
        <NavLink
          to="/continents"
          onClick={back}
          className="back-link"
        >
          <span>{`Back to ${continent}`}</span>
        </NavLink>
        <span className="country-path">{` > ${country.name}`}</span>
      </div>
      <div
        className="data"
        style={
          { display: 'flex', flexDirection: 'column' }
        }
      >
        <span>{`Population: ${country.population}`}</span>
        <img className="country-flag" alt={`${country.name}'s flag.`} src={country.flag} />
        {pollution && Object.keys(pollution).length > 0
          ? (
            <div className="pollution-data">
              <span
                className="status"
                style={{
                  color: status[pollution.index][1],
                }}
              >
                {`${pollution.index}: ${status[pollution.index][0]}`}
              </span>
              <ul className="compounds">
                {Object.keys(pollution.composition).map((key) => (
                  <li className="compound" key={key}>
                    <span>{key}</span>
                    <span>{pollution.composition[key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
          : ''}
      </div>
    </div>
  );
};

export default Country;
