// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import pollution from '../redux/currentPollution/currentPollution';
import countries from '../redux/continentCountries/continentCountries';
import continent from '../redux/continent/continent';
import country from '../redux/country/country';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        pollution,
        countries,
        continent,
        country,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
