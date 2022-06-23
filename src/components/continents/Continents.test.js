import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Continents from './Continents';
import store from '../../redux/configureStore';
import { getCountries } from '../../http-common';
import { BrowserRouter } from "react-router-dom";


jest.mock('../../http-common');

const fetch = async () => {
  const state = {
    data: [
      {
        name: {common: 'Zimbabwe'},
        region: 'Africa',
        coords: [12, 42],
        population: 100000,
        flags: {svg: 'some svg link'},
      }
    ],
  };
  await getCountries.get.mockResolvedValue(state);
}

describe('Continents Component', () => {
  beforeEach(async () => {
    fetch();
  });

  afterEach(() => {
    act(() => store.dispatch({
      type: 'metrics/continent/SET_CONTINENT',
      payload: 'Africa',
    }));
  });

  it('renders correctly', async () => {
    render(<Provider store={store}><BrowserRouter><Continents /></BrowserRouter></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Africa').length).toBeGreaterThan(0);
    });
  });

  it('maintains the snapshots between renders', async () => {
    const tree = render(<Provider store={store}><BrowserRouter><Continents /></BrowserRouter></Provider>);
    await expect(tree).toMatchSnapshot();
  });
});
