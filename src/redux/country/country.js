const SET_COUNTRY = 'metrics/country/SET_COUNTRY';

function setCountry(dispatch, country) {
  dispatch({ type: SET_COUNTRY, payload: country });
}

export default function reducer(state = '', action) {
  switch (action.type) {
    case SET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
}

export { setCountry };
