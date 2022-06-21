import PropTypes from 'prop-types';

const Country = (props) => {
  const { name } = props;
  return (
    <div className="country">
      {name}
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Country;
