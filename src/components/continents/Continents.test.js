import Continents from './Continents';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { screen, render } from '../../mocks/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  rest.get(/africa/i, (req, res, ctx) =>{
    return res(
      ctx.status(200),
      ctx.json(
        [
          {
            "flags": {
              "svg": "algo"
            },
            "name": {
              "common": "Zimbabwe"
            },
            "latlng": [
              37.0,
              127.5
            ],
            "population": 69420,
            "region": 'Africa'
          }
        ]
      )
    )
  }),
  rest.get(/americas/i, (req, res, ctx) =>{
    return res(
      ctx.status(200),
      ctx.json(
        [
          {
            "flags": {
              "svg": "algo"
            },
            "name": {
              "common": "Mexico"
            },
            "latlng": [
              37.0,
              127.5
            ],
            "population": 69420,
            "region": 'Africa'
          }
        ]
      )
    )
  }),
];

const server = setupServer(...handlers );

describe('Continents Component', () => {
  beforeEach(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('renders correctly', () => {
    render(<BrowserRouter><Continents /></BrowserRouter>);
    expect(screen.getAllByText('Africa').length).toBeGreaterThan(0);
  });

  it('renders another continent with countries', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter initialEntries={['/continents']}><Continents /></MemoryRouter>);
    const continent1 = screen.getByText('Africa');
    const select = await screen.findByRole('combobox');
    await user.click(continent1);
    const continent2 = screen.getByText('Americas');
    await user.selectOptions(select, continent2);
    const mexico = screen.getByText(/mexico/i);
    expect(mexico).toBeInTheDocument();
  });
});
