import WorldService from '../../services/WorldService';

const GET_POLLUTION = 'template/template-reducer/GET_POLLUTION';

async function getCurrentPollution(dispatch, getState) {
  const { pollution: currentData } = getState();

  if (Object.keys(currentData).length === 0) {
    const { data } = await WorldService.getCurrentPollutionData();
    const fetchedCurrentPollution = data.map((stuff) => ({
      fetchedValue: stuff.value,
      default: 'default value',
    }));

    dispatch({ type: SOME_ACTION, payload: fetchedCurrentPollution });
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case SOME_ACTION:
      return state;
    default:
      return state;
  }
}

export { getCurrentPollution };
