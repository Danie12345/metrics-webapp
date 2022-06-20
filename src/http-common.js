import axios from 'axios';

const airPollutionURL = 'http://api.openweathermap.org/data/2.5/air_pollution';
const airPollutionKey = 'aafa8bdb6721fd796e15393dd7b376bf';
const openCageDataURL = 'https://api.opencagedata.com/geocode/v1/json';
const openCageDataKey = 'ae1b0f54d8f8479c9d08f45eeec144a2';
const getCountriesURL = 'https://restcountries.com/v3.1';

const airPollution = axios.create({
  baseURL: airPollutionURL,
  headers: {
    'Content-type': 'application/json',
  },
});

const openCageData = axios.create({
  baseURL: openCageDataURL,
  headers: {
    'Content-type': 'application/json',
  },
});

const getCountries = axios.create({
  baseURL: getCountriesURL,
  headers: {
    'Content-type': 'application/json',
  },
});

export {
  airPollution, airPollutionKey, openCageData, openCageDataKey, getCountries,
};
