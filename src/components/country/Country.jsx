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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{country.name}</span>
        <span>{`Population: ${country.population}`}</span>
        <img style={{ width: '120px', height: 'auto' }} alt={`${country.name}'s flag.`} src={country.flag} />
        {pollution && Object.keys(pollution).length > 0
          ? (
            <div>
              <div>
                <span
                  style={{
                    color: status[pollution.index][1],
                  }}
                >
                  {pollution.index}
                </span>
                {Object.keys(pollution.composition).map((key) => (
                  <div key={key}>
                    <span>{key}</span>
                    {' '}
                    <span>{pollution.composition[key]}</span>
                  </div>
                ))}
              </div>
            </div>
          )
          : ''}
      </div>
    </div>
  );
};

export default Country;
