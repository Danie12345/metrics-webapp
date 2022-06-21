const SET_COUNTRY = 'metrics/country/SET_COUNTRY';

function setCountry(dispatch, country) {
  let payload = country;
  if (Object.keys(country).length === 0) {
    payload.name = '';
  }
  dispatch({ type: SET_COUNTRY, payload: payload });
}

export default function reducer(state = {name: ''}, action) {
  switch (action.type) {
    case SET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
}

export { setCountry };
