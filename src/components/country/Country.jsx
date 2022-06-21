import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCountry } from '../../redux/country/country';

const Country = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };
  return (
    <div className="country">
      <NavLink
        to="/continents"
        className="nav-link"
        onClick={() => { countrySelect({}); }}
      >
        <span>BACK</span>
      </NavLink>
      {country.name}
    </div>
  );
};

export default Country;
