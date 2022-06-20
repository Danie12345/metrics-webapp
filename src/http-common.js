import axios from 'axios';

const airPollution_URL = 'http://api.openweathermap.org/data/2.5/';
const airPollution_key = 'aafa8bdb6721fd796e15393dd7b376bf';
const openCageData_URL = 'https://api.opencagedata.com/geocode/v1/';
const openCageData_key = 'ae1b0f54d8f8479c9d08f45eeec144a2';

const airPollution = axios.create({
  baseURL: airPollution_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const openCageData = axios.create({
  baseURL: openCageData_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export { airPollution, airPollution_key, openCageData, openCageData_key };
