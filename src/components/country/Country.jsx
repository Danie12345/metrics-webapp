import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCountry } from '../../redux/country/country';
import { getCurrentPollution } from '../../redux/currentPollution/currentPollution';

const Country = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const pollution = useSelector((state) => state.pollution);
  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };

  useEffect(() => {
    dispatch(getCurrentPollution);
  }, []);

  return (
    <div className="country">
      <div>
        <NavLink
          to="/continents"
          onClick={() => { countrySelect({}); }}
        >
          <span>BACK</span>
        </NavLink>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{country.name}</span>
        <span>{country.region}</span>
        <span>{country.coords[0]}</span>
        <span>{country.coords[1]}</span>
        <span>{`Population: ${country.population}`}</span>
        <img style={{ width: '120px', height: 'auto' }} alt={`${country.name}'s flag.`} src={country.flag} />
        {pollution && Object.keys(pollution).length > 0
          ? (
            <div>
              <div>
                <span>{pollution.lat}</span>
                <span>{pollution.lon}</span>
              </div>
              <div>
                <span>{pollution.index}</span>
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
