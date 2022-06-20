import {
  airPollution, airPollutionKey, getCountries,
} from '../http-common';

const getCurrentPollutionData = (lat, lon) => airPollution.get(`/?lat=${lat}&lon=${lon}&appid=${airPollutionKey}`);

const getContinentCountries = (continent) => getCountries.get(`/region/${continent}`);

const WorldService = {
  getCurrentPollutionData,
  getContinentCountries,
};

export default WorldService;
