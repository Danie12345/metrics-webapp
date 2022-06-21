import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCountry } from '../../redux/country/country';

const Country = (props) => {
  const dispatch = useDispatch();
  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };
  const { name } = props;
  return (
    <div className="country">
      <NavLink
        to="/continents"
        className="nav-link"
        onClick={() => { countrySelect(''); }}
      >
        <span>BACK</span>
      </NavLink>
      {name}
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Country;
