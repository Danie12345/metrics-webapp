import {
  airPollution, airPollutionKey, openCageData, openCageDataKey, getCountries,
} from '../http-common';

const getCurrentPollutionData = (lat, lon) => airPollution.get(`/?lat=${lat}&lon=${lon}&appid=${airPollutionKey}`);

const getCoordsByCountry = (country) => openCageData.get(`/?key=${openCageDataKey}&q=${country}&pretty=1&no_annotations=1&limit=1`);

const getContinentCountries = (continent) => getCountries.get(`?region=${continent}&pretty=true`);

const WorldService = {
  getCurrentPollutionData,
  getCoordsByCountry,
  getContinentCountries,
};

export default WorldService;
